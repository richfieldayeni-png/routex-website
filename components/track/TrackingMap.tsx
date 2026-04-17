"use client";

import { useEffect, useRef, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { VehicleLocation, PassengerLocation } from "@/types/track";

interface TrackingMapProps {
  vehicleLocation: VehicleLocation | null;
  passengerLocation: PassengerLocation | null;
}

const defaultCenter = { lat: 9.0579, lng: 7.4951 };
const ANIMATION_DURATION = 1000; // ms

// Easing function for smooth animation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// Hook for smooth position interpolation
function useSmoothPosition(
  targetLocation: { latitude: number; longitude: number } | null,
): { lat: number; lng: number } | null {
  const [displayPos, setDisplayPos] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const animationRef = useRef<number | null>(null);
  const startPosRef = useRef<{ lat: number; lng: number } | null>(null);
  const startTimeRef = useRef<number>(0);
  const isFirstPosition = useRef(true);

  useEffect(() => {
    if (!targetLocation) {
      setDisplayPos(null);
      return;
    }

    const target = {
      lat: targetLocation.latitude,
      lng: targetLocation.longitude,
    };

    // First position - set immediately without animation
    if (isFirstPosition.current || !displayPos) {
      isFirstPosition.current = false;
      setDisplayPos(target);
      startPosRef.current = target;
      return;
    }

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Start new animation
    startPosRef.current = displayPos;
    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const easedProgress = easeOutCubic(progress);

      if (startPosRef.current) {
        const newLat =
          startPosRef.current.lat +
          (target.lat - startPosRef.current.lat) * easedProgress;
        const newLng =
          startPosRef.current.lng +
          (target.lng - startPosRef.current.lng) * easedProgress;
        setDisplayPos({ lat: newLat, lng: newLng });
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        startPosRef.current = target;
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

  console.log("🗺️ MapContent render:", {
    vehicleLocation,
    passengerLocation,
    smoothPrimaryPos,
    mapReady: !!map,
  });

  useEffect(() => {
    if (!map) return;

    const bounds = new google.maps.LatLngBounds();
    let hasPoints = false;

    if (primaryVehicleLocation) {
      bounds.extend({
        lat: primaryVehicleLocation.latitude,
        lng: primaryVehicleLocation.longitude,
      });
      hasPoints = true;
    }

    if (passengerLocation && vehicleLocation) {
      bounds.extend({
        lat: passengerLocation.latitude,
        lng: passengerLocation.longitude,
      });
      hasPoints = true;
    }

    if (hasPoints) {
      map.fitBounds(bounds, { top: 80, right: 60, bottom: 260, left: 60 });

      const listener = google.maps.event.addListenerOnce(map, "idle", () => {
        const zoom = map.getZoom();
        if (zoom && zoom > 16) map.setZoom(16);
      });

      return () => {
        google.maps.event.removeListener(listener);
      };
    }
  }, [map, primaryVehicleLocation, passengerLocation, vehicleLocation]);

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
