"use client";

import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import {
  VehicleLocation,
  PassengerLocation,
  SocketException,
  TrackingState,
  TripInfo,
} from "@/types/track";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://dev.api.routexgo.co";

export function useTrackSocket(token: string) {
  const [state, setState] = useState<TrackingState>({
    vehicleLocation: null,
    passengerLocation: null,
    tripInfo: null,
    isConnected: false,
    isConnecting: true,
    error: null,
  });

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io(API_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("✅ Socket connected");
      setState((prev) => ({
        ...prev,
        isConnected: true,
        isConnecting: false,
        error: null,
      }));

      socketInstance.emit("join-trip-share", { token });
      console.log("📤 Sent join-trip-share with token:", token);
    });

    socketInstance.on("disconnect", () => {
      console.log("❌ Socket disconnected");
      setState((prev) => ({
        ...prev,
        isConnected: false,
      }));
    });

    socketInstance.on("connect_error", (error) => {
      console.error("❌ Socket connection error:", error);
      setState((prev) => ({
        ...prev,
        isConnecting: false,
        isConnected: false,
        error: "Failed to connect to tracking server",
      }));
    });

    socketInstance.on("vehicle-location", (data: VehicleLocation) => {
      console.log("🚗 Vehicle location received:", data);
      setState((prev) => ({
        ...prev,
        vehicleLocation: data,
      }));
    });

    socketInstance.on("passenger-location", (data: PassengerLocation) => {
      console.log("👤 Passenger location received:", data);
      setState((prev) => ({
        ...prev,
        passengerLocation: data,
      }));
    });

    socketInstance.on("exception", (data: SocketException) => {
      console.error("⚠️ Socket exception:", data);
      setState((prev) => ({
        ...prev,
        error: data.message || "An error occurred",
      }));
    });

    socketInstance.onAny((eventName, ...args) => {
      console.log("📨 Socket event:", eventName, JSON.stringify(args, null, 2));

      // Check if any event contains tripId and fetch trip details
      if (args[0] && typeof args[0] === "object") {
        const data = Array.isArray(args[0]) ? args[0][0] : args[0];
        if (data?.tripId) {
          console.log("🔍 Found tripId, fetching trip details:", data.tripId);
          fetchTripDetails(data.tripId);
        }
      }
    });

    // Log all events we're listening for
    console.log(
      "👂 Listening for events: vehicle-location, passenger-location, exception, trip-info",
    );

    const fetchTripDetails = async (tripId: string) => {
      try {
        console.log("📡 Fetching trip details for:", tripId);
        const response = await fetch(`/api/trips/${tripId}`);
        const result = await response.json();
        console.log("📋 Trip API response:", result);

        if (result.data) {
          setState((prev) => ({
            ...prev,
            tripInfo: result.data,
          }));
        }
      } catch (err) {
        console.error("❌ Failed to fetch trip details:", err);
      }
    };

    return () => {
      if (socketInstance.connected) {
        socketInstance.disconnect();
      } else {
        socketInstance.removeAllListeners();
      }
    };
  }, [token]);

  const reconnect = useCallback(() => {
    if (socket) {
      setState((prev) => ({ ...prev, isConnecting: true, error: null }));
      socket.connect();
    }
  }, [socket]);

  return { ...state, reconnect };
}
