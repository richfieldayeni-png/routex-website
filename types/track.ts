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

export interface TripInfo {
  id: string;
  status: string;
  passenger?: PassengerInfo;
}

export interface TrackingState {
  vehicleLocation: VehicleLocation | null;
  passengerLocation: PassengerLocation | null;
  tripInfo: TripInfo | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
}
