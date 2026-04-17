"use client";

import { useState } from "react";
import { useTrackSocket } from "@/hooks/useTrackSocket";
import TrackingMap from "./TrackingMap";

interface TrackingPageProps {
  token: string;
}

export default function TrackingPage({ token }: TrackingPageProps) {
  const {
    vehicleLocation,
    passengerLocation,
    tripInfo,
    isConnected,
    isConnecting,
    error,
    reconnect,
  } = useTrackSocket(token);

  const [sheetExpanded, setSheetExpanded] = useState(true);

  const speed = vehicleLocation?.speed ?? passengerLocation?.speed;
  const heading = vehicleLocation?.heading ?? passengerLocation?.heading;
  const passengerName = tripInfo?.passenger
    ? `${tripInfo.passenger.firstName} ${tripInfo.passenger.lastName}`
    : null;

  // Trip details
  const vehicleName = tripInfo?.vehicle?.name;
  const vehicleType = tripInfo?.vehicle?.type;
  const startLocationName =
    tripInfo?.startLocation?.name || tripInfo?.route?.startLocation?.name;
  const endLocationName =
    tripInfo?.endLocation?.name || tripInfo?.route?.endLocation?.name;
  const tripCode = tripInfo?.code;
  const distanceKm = tripInfo?.route?.distanceKm;
  const estimatedDurationMin = tripInfo?.route?.estimatedDurationMin;
  const stops = tripInfo?.tripStopStatuses || [];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0D1117",
        fontFamily: "var(--body)",
      }}
    >
      {/* ── Full-bleed Map ── */}
      <div style={{ position: "absolute", inset: 0 }}>
        {!error && !isConnecting && (
          <TrackingMap
            vehicleLocation={vehicleLocation}
            passengerLocation={passengerLocation}
          />
        )}
      </div>

      {/* ── Floating Brand Badge (top-left) ── */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: 12,
          padding: "8px 14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "#1A5632",
            borderRadius: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: 15,
            color: "#0D1117",
            letterSpacing: -0.3,
          }}
        >
          Route<span style={{ color: "#1A5632" }}>X</span>
        </span>
      </div>

      {/* ── Connection Pill (top-right) ── */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: isConnected
            ? "rgba(255,255,255,0.95)"
            : error
              ? "rgba(239,68,68,0.95)"
              : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: 20,
          padding: "6px 14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        }}
      >
        <div
          className={isConnecting ? "track-pulse" : ""}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: isConnected ? "#2DA05C" : error ? "#fff" : "#F59E0B",
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.3,
            color: isConnected ? "#1A5632" : error ? "#fff" : "#92400E",
            textTransform: "uppercase",
          }}
        >
          {isConnected ? "Live" : isConnecting ? "Connecting" : "Offline"}
        </span>
      </div>

      {/* ── Error Overlay ── */}
      {error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(13,17,23,0.85)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: 360, padding: "0 24px" }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(239,68,68,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: 22,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 8,
              }}
            >
              Unable to Track Trip
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              {error}
            </p>
            <button
              onClick={reconnect}
              style={{
                background: "#1A5632",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "13px 32px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "var(--body)",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#237A47")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1A5632")
              }
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* ── Connecting Overlay ── */}
      {isConnecting && !error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(13,17,23,0.7)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              className="track-spinner"
              style={{ width: 44, height: 44, margin: "0 auto 16px" }}
            />
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: 0.2,
              }}
            >
              Connecting to trip...
            </p>
          </div>
        </div>
      )}

      {/* ── Bottom Sheet ── */}
      {isConnected && !error && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            transform: sheetExpanded
              ? "translateY(0)"
              : "translateY(calc(100% - 56px))",
            transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
          }}
        >
          {/* Sheet Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "20px 20px 0 0",
              boxShadow: "0 -4px 30px rgba(0,0,0,0.15)",
              padding: "0 20px 28px",
              maxWidth: 480,
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Handle */}
            <div
              onClick={() => setSheetExpanded(!sheetExpanded)}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "12px 0 16px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 4,
                  borderRadius: 2,
                  background: "#D1D5DB",
                }}
              />
            </div>

            {/* Status Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                className="track-pulse"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#2DA05C",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#0D1117",
                    lineHeight: 1.2,
                  }}
                >
                  Tracking your ride
                </div>
                <div style={{ fontSize: 12, color: "#6A737D", marginTop: 2 }}>
                  Real-time location updates
                </div>
              </div>
            </div>

            {/* Route Info */}
            {(startLocationName || endLocationName) && (
              <div
                style={{
                  background: "#F8FAFC",
                  borderRadius: 14,
                  padding: "14px 16px",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  {/* Route line indicator */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: 2,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#1A5632",
                        border: "2px solid #1A5632",
                      }}
                    />
                    <div
                      style={{
                        width: 2,
                        height: stops.length > 0 ? 50 : 24,
                        background:
                          "linear-gradient(to bottom, #1A5632, #6A737D)",
                        margin: "4px 0",
                      }}
                    />
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#fff",
                        border: "2px solid #6A737D",
                      }}
                    />
                  </div>
                  {/* Locations */}
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: stops.length > 0 ? 8 : 16 }}>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#6A737D",
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                          marginBottom: 2,
                        }}
                      >
                        From
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#0D1117",
                          fontWeight: 600,
                        }}
                      >
                        {startLocationName || "—"}
                      </div>
                    </div>
                    {/* Stops */}
                    {stops.length > 0 && (
                      <div
                        style={{
                          marginBottom: 8,
                          paddingLeft: 8,
                          borderLeft: "1px dashed #D1D5DB",
                        }}
                      >
                        {stops.map((stop, idx) => (
                          <div
                            key={stop.id}
                            style={{
                              fontSize: 12,
                              color: "#6A737D",
                              marginBottom: 4,
                            }}
                          >
                            <span style={{ color: "#1A5632", fontWeight: 500 }}>
                              •
                            </span>{" "}
                            {stop.stop.name}
                            <span
                              style={{
                                fontSize: 10,
                                marginLeft: 6,
                                color: "#9CA3AF",
                              }}
                            >
                              ({stop.role.replace("_", " ").toLowerCase()})
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#6A737D",
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                          marginBottom: 2,
                        }}
                      >
                        To
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#0D1117",
                          fontWeight: 600,
                        }}
                      >
                        {endLocationName || "—"}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Trip meta */}
                {(distanceKm || estimatedDurationMin || tripCode) && (
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: "1px solid #E8EEF2",
                    }}
                  >
                    {tripCode && (
                      <div style={{ fontSize: 11, color: "#6A737D" }}>
                        <span style={{ fontWeight: 600, color: "#0D1117" }}>
                          {tripCode}
                        </span>
                      </div>
                    )}
                    {distanceKm && (
                      <div style={{ fontSize: 11, color: "#6A737D" }}>
                        {distanceKm} km
                      </div>
                    )}
                    {estimatedDurationMin && (
                      <div style={{ fontSize: 11, color: "#6A737D" }}>
                        ~{Math.round(estimatedDurationMin / 60)}h{" "}
                        {estimatedDurationMin % 60}m
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Info Cards */}
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              {/* Vehicle Card */}
              <div
                style={{
                  flex: 1,
                  background: "#1A5632",
                  borderRadius: 14,
                  padding: "14px 16px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 17h14M5 17a2 2 0 01-2-2V8a2 2 0 012-2h2l2-3h6l2 3h2a2 2 0 012 2v7a2 2 0 01-2 2M5 17l-1 3m15-3l1 3" />
                      <circle cx="7.5" cy="17" r="1.5" />
                      <circle cx="16.5" cy="17" r="1.5" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      opacity: 0.8,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    {vehicleType || "Vehicle"}
                  </span>
                </div>
                {vehicleName ? (
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: 4,
                      }}
                    >
                      {vehicleName}
                    </div>
                    {speed !== undefined && speed !== null && (
                      <div
                        style={{
                          fontFamily: "var(--display)",
                          fontSize: 18,
                          fontWeight: 800,
                          lineHeight: 1,
                          marginTop: 6,
                        }}
                      >
                        {Math.round(speed)}{" "}
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 500,
                            opacity: 0.7,
                          }}
                        >
                          km/h
                        </span>
                      </div>
                    )}
                  </div>
                ) : vehicleLocation ? (
                  <div>
                    {speed !== undefined && speed !== null && (
                      <div
                        style={{
                          fontFamily: "var(--display)",
                          fontSize: 22,
                          fontWeight: 800,
                          lineHeight: 1,
                        }}
                      >
                        {Math.round(speed)}{" "}
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            opacity: 0.7,
                          }}
                        >
                          km/h
                        </span>
                      </div>
                    )}
                    {heading !== undefined && heading !== null && (
                      <div
                        style={{ fontSize: 11, opacity: 0.65, marginTop: 4 }}
                      >
                        Heading {Math.round(heading)}°
                      </div>
                    )}
                    {(speed === undefined || speed === null) &&
                      (heading === undefined || heading === null) && (
                        <div style={{ fontSize: 13, opacity: 0.8 }}>
                          Location active
                        </div>
                      )}
                  </div>
                ) : (
                  <div style={{ fontSize: 13, opacity: 0.7 }}>
                    Waiting for data...
                  </div>
                )}
              </div>

              {/* Passenger Card */}
              <div
                style={{
                  flex: 1,
                  background: "#F0F4F8",
                  borderRadius: 14,
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "#E8F5ED",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1A5632"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#6A737D",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    Passenger
                  </span>
                </div>
                {passengerName ? (
                  <div
                    style={{ fontSize: 15, color: "#1C2128", fontWeight: 600 }}
                  >
                    {passengerName}
                  </div>
                ) : passengerLocation ? (
                  <div
                    style={{ fontSize: 13, color: "#1C2128", fontWeight: 500 }}
                  >
                    Location active
                  </div>
                ) : (
                  <div style={{ fontSize: 13, color: "#6A737D" }}>
                    Waiting for data...
                  </div>
                )}
              </div>
            </div>

            {/* Footer info */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: 11, color: "#BDC3C9", lineHeight: 1.4 }}>
                Powered by RouteX
              </div>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Track my trip",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "1px solid #E8EEF2",
                  borderRadius: 8,
                  padding: "7px 14px",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#1A5632",
                  fontFamily: "var(--body)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8F5ED";
                  e.currentTarget.style.borderColor = "#1A5632";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.borderColor = "#E8EEF2";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                Share Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
