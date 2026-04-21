"use client";

import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import {
  VehicleLocation,
  PassengerLocation,
  SocketException,
  TrackingState,
  TripShareInfo,
} from "@/types/track";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://dev.api.routexgo.co";

export function useTrackSocket(token: string) {
  const [state, setState] = useState<TrackingState>({
    vehicleLocation: null,
    passengerLocation: null,
    shareInfo: null,
    isConnected: false,
    isConnecting: true,
    error: null,
  });

  const [socket, setSocket] = useState<Socket | null>(null);

  // Fetch trip share info (passenger + stops) by token
  useEffect(() => {
    let cancelled = false;
    const fetchShareInfo = async () => {
      try {
        const response = await fetch(`/api/trips/share/${token}`);
        if (!response.ok) {
          return;
        }
        const result = await response.json();
        const data: TripShareInfo | undefined = result?.data;
        if (!cancelled && data) {
          setState((prev) => ({ ...prev, shareInfo: data }));
        }
      } catch (err) {
        // Error silently handled
      }
    };
    fetchShareInfo();
    return () => {
      cancelled = true;
    };
  }, [token]);

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
      setState((prev) => ({
        ...prev,
        isConnected: true,
        isConnecting: false,
        error: null,
      }));

      socketInstance.emit("join-trip-share", { token });
    });

    socketInstance.on("disconnect", () => {
      setState((prev) => ({
        ...prev,
        isConnected: false,
      }));
    });

    socketInstance.on("connect_error", (error) => {
      setState((prev) => ({
        ...prev,
        isConnecting: false,
        isConnected: false,
        error: "Failed to connect to tracking server",
      }));
    });

    socketInstance.on("vehicle-location", (data: VehicleLocation) => {
      setState((prev) => ({
        ...prev,
        vehicleLocation: data,
        isConnecting: false,
        error: null,
      }));
    });

    const handlePassengerLocation = (data: PassengerLocation) => {
      setState((prev) => ({
        ...prev,
        passengerLocation: data,
        isConnecting: false,
        error: null,
      }));
    };

    socketInstance.on("passenger-location", handlePassengerLocation);
    socketInstance.on("passenger-location-update", handlePassengerLocation);

    socketInstance.on("exception", (data: SocketException) => {
      setState((prev) => ({
        ...prev,
        error: data.message || "An error occurred",
      }));
    });

    socketInstance.onAny((eventName, ...args) => {
      // Silent
    });

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
