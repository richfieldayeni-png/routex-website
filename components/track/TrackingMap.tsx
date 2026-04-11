"use client";

import { useCallback, useEffect, useState, useRef } from "react";
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

function MapContent({ vehicleLocation, passengerLocation }: TrackingMapProps) {
  const map = useMap();

  console.log("🗺️ MapContent render:", {
    vehicleLocation,
    passengerLocation,
    mapReady: !!map,
  });

  useEffect(() => {
    if (!map) return;

    const bounds = new google.maps.LatLngBounds();
    let hasPoints = false;

    if (vehicleLocation) {
      bounds.extend({
        lat: vehicleLocation.latitude,
        lng: vehicleLocation.longitude,
      });
      hasPoints = true;
    }

    if (passengerLocation) {
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
  }, [map, vehicleLocation, passengerLocation]);

  return (
    <Map
      defaultCenter={
        vehicleLocation
          ? { lat: vehicleLocation.latitude, lng: vehicleLocation.longitude }
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
      {vehicleLocation && (
        <AdvancedMarker
          position={{
            lat: vehicleLocation.latitude,
            lng: vehicleLocation.longitude,
          }}
          zIndex={10}
        >
          <div
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

      {passengerLocation && (
        <AdvancedMarker
          position={{
            lat: passengerLocation.latitude,
            lng: passengerLocation.longitude,
          }}
          zIndex={5}
        >
          <div
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
