export interface VehicleLocation {
  latitude: number;
  longitude: number;
  heading?: number;
  speed?: number;
  timestamp: string;
}

export interface PassengerLocation {
  latitude: number;
  longitude: number;
  heading?: number;
  speed?: number;
  timestamp: string;
}

export interface SocketException {
  message: string;
  code?: string;
}

export interface PassengerInfo {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  country?: string;
}

export interface VehicleInfo {
  id: string;
  name: string;
  registrationNo: string;
  totalSeats: number;
  type: string;
}

export interface RouteInfo {
  id: string;
  code: string;
  startLocation: LocationInfo;
  endLocation: LocationInfo;
  basePrice: number;
  distanceKm: number;
  estimatedDurationMin: number;
  numStops: number;
}

export interface TripStopStatus {
  id: string;
  tripId: string;
  stopId: string;
  sequence: number;
  status: string;
  role: string;
  actualArrival: string | null;
  actualDeparture: string | null;
  stop: LocationInfo;
}

export interface TripInfo {
  id: string;
  code: string;
  status: string;
  departureTime: string;
  boardingOpensAt: string;
  availableSeats: number;
  passenger?: PassengerInfo;
  vehicle?: VehicleInfo;
  route?: RouteInfo;
  startLocation?: LocationInfo;
  endLocation?: LocationInfo;
  tripStopStatuses?: TripStopStatus[];
}

export interface TrackingState {
  vehicleLocation: VehicleLocation | null;
  passengerLocation: PassengerLocation | null;
  tripInfo: TripInfo | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
}
