"use client";

import { useEffect, useRef, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { VehicleLocation, PassengerLocation } from "@/types/track";

declare global {
  interface Window {
    google: any;
  }
}

interface TrackingMapProps {
  vehicleLocation: VehicleLocation | null;
  passengerLocation: PassengerLocation | null;
}

const defaultCenter = { lat: 9.0579, lng: 7.4951 };
// Fallback animation duration used until we have measured the real update interval
const DEFAULT_DURATION = 1500; // ms
const MIN_DURATION = 400;
const MAX_DURATION = 4000;

// Hook for smooth, continuous (linear) position interpolation.
// Duration is matched to the observed update interval so the marker moves at
// a constant speed and arrives just as the next update comes in — no stop/start.
function useSmoothPosition(
  targetLocation: { latitude: number; longitude: number } | null,
): { lat: number; lng: number } | null {
  const [displayPos, setDisplayPos] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const displayPosRef = useRef<{ lat: number; lng: number } | null>(null);
  const animationRef = useRef<number | null>(null);
  const startPosRef = useRef<{ lat: number; lng: number } | null>(null);
  const startTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(DEFAULT_DURATION);
  const lastUpdateTsRef = useRef<number | null>(null);
  const isFirstPosition = useRef(true);

  useEffect(() => {
    if (!targetLocation) {
      setDisplayPos(null);
      displayPosRef.current = null;
      return;
    }

    const target = {
      lat: targetLocation.latitude,
      lng: targetLocation.longitude,
    };
    const now = performance.now();

    // First position — snap, no animation.
    if (isFirstPosition.current || !displayPosRef.current) {
      isFirstPosition.current = false;
      displayPosRef.current = target;
      setDisplayPos(target);
      startPosRef.current = target;
      lastUpdateTsRef.current = now;
      return;
    }

    // Measure interval between updates to time the animation so motion is continuous.
    if (lastUpdateTsRef.current != null) {
      const observed = now - lastUpdateTsRef.current;
      if (observed > 50) {
        // Blend observed with previous to avoid jitter
        durationRef.current = Math.max(
          MIN_DURATION,
          Math.min(MAX_DURATION, (durationRef.current + observed) / 2),
        );
      }
    }
    lastUpdateTsRef.current = now;

    // Cancel any existing animation and start fresh from current displayed pos.
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    startPosRef.current = displayPosRef.current;
    startTimeRef.current = now;
    const duration = durationRef.current;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Linear — constant speed like a vehicle on a highway.
      if (startPosRef.current) {
        const newLat =
          startPosRef.current.lat +
          (target.lat - startPosRef.current.lat) * progress;
        const newLng =
          startPosRef.current.lng +
          (target.lng - startPosRef.current.lng) * progress;
        const next = { lat: newLat, lng: newLng };
        displayPosRef.current = next;
        setDisplayPos(next);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetLocation?.latitude, targetLocation?.longitude]);

  return displayPos;
}

function MapContent({ vehicleLocation, passengerLocation }: TrackingMapProps) {
  const map = useMap();
  const primaryVehicleLocation = passengerLocation ?? vehicleLocation;

  // Use smooth positions for markers
  const smoothPrimaryPos = useSmoothPosition(primaryVehicleLocation);
  const smoothPassengerPos = useSmoothPosition(
    passengerLocation && vehicleLocation ? passengerLocation : null,
  );

  const hasInitialFitRef = useRef(false);
  const hasLockedToMarkerRef = useRef(false);

  // Initial fit: run once when we first have both points (or the primary point).
  // After that we only smoothly pan to follow the marker — no more abrupt
  // re-zooms / re-fits on every location update.
  useEffect(() => {
    if (!map) return;
    if (hasInitialFitRef.current) return;
    if (!primaryVehicleLocation) return;

    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend({
      lat: primaryVehicleLocation.latitude,
      lng: primaryVehicleLocation.longitude,
    });
    if (passengerLocation && vehicleLocation) {
      bounds.extend({
        lat: passengerLocation.latitude,
        lng: passengerLocation.longitude,
      });
    }
    map.fitBounds(bounds, { top: 80, right: 60, bottom: 260, left: 60 });

    const listener = window.google.maps.event.addListenerOnce(
      map,
      "idle",
      () => {
        const zoom = map.getZoom();
        if (zoom && zoom > 16) map.setZoom(16);
        hasInitialFitRef.current = true;
      },
    );

    return () => {
      window.google.maps.event.removeListener(listener);
    };
  }, [map, primaryVehicleLocation, passengerLocation, vehicleLocation]);

  // Lock the marker to the center of the canvas — on every interpolated
  // position update, re-center the map so the marker appears stationary and
  // the map itself slides underneath it. setCenter is instant (not animated)
  // so it stays in lockstep with the marker, which is already smoothly
  // interpolated by useSmoothPosition. The first transition from the
  // fit-bounds view uses panTo for a gentle handoff.
  useEffect(() => {
    if (!map || !smoothPrimaryPos) return;
    if (!hasInitialFitRef.current) return;
    if (!hasLockedToMarkerRef.current) {
      map.panTo(smoothPrimaryPos);
      hasLockedToMarkerRef.current = true;
      return;
    }
    map.setCenter(smoothPrimaryPos);
  }, [map, smoothPrimaryPos?.lat, smoothPrimaryPos?.lng]);

  return (
    <Map
      defaultCenter={
        primaryVehicleLocation
          ? {
              lat: primaryVehicleLocation.latitude,
              lng: primaryVehicleLocation.longitude,
            }
          : passengerLocation
            ? {
                lat: passengerLocation.latitude,
                lng: passengerLocation.longitude,
              }
            : defaultCenter
      }
      defaultZoom={14}
      mapId="routex-tracking-map"
      style={{ width: "100%", height: "100%" }}
      disableDefaultUI={true}
      zoomControl={true}
      mapTypeControl={false}
      streetViewControl={false}
      fullscreenControl={false}
      gestureHandling="greedy"
      clickableIcons={false}
    >
      {smoothPrimaryPos && (
        <AdvancedMarker position={smoothPrimaryPos} zIndex={10}>
          <div
            className="tracking-marker"
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="#1A5632"
                stroke="#ffffff"
                strokeWidth="3"
              />
              <g transform="translate(14, 12)">
                <path
                  d="M5 22h18M6 8h16l2.5 6H3.5L6 8z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="14"
                  width="22"
                  height="8"
                  rx="2"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle cx="8" cy="25" r="2" fill="#fff" />
                <circle cx="20" cy="25" r="2" fill="#fff" />
                <line
                  x1="14"
                  y1="14"
                  x2="14"
                  y2="22"
                  stroke="#fff"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
              </g>
            </svg>
          </div>
        </AdvancedMarker>
      )}

      {smoothPassengerPos && (
        <AdvancedMarker position={smoothPassengerPos} zIndex={5}>
          <div
            className="tracking-marker"
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <circle cx="22" cy="22" r="10" fill="#237A47" opacity="0.15" />
              <circle
                cx="22"
                cy="22"
                r="7"
                fill="#1A5632"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <circle cx="22" cy="22" r="3" fill="#ffffff" />
            </svg>
          </div>
        </AdvancedMarker>
      )}
    </Map>
  );
}

export default function TrackingMap({
  vehicleLocation,
  passengerLocation,
}: TrackingMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          background: "#F0F4F8",
        }}
      >
        <p
          style={{ color: "#EF4444", fontSize: 14, fontFamily: "var(--body)" }}
        >
          Google Maps API key not configured
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <MapContent
        vehicleLocation={vehicleLocation}
        passengerLocation={passengerLocation}
      />
    </APIProvider>
  );
}
