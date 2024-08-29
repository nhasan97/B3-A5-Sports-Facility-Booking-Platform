import { TUserExtended } from "./auth.type";
import { TFacility } from "./facility.type";

export type TBooking = {
  facility: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type TBookingExtended = {
  _id?: string;
  date: string;
  startTime: string;
  endTime: string;
  user: TUserExtended;
  facility: TFacility;
  payableAmount: number;
  transactionID: string;
  paymentStatus: "pending" | "paid" | "failed";
  isBooked: "confirmed" | "unconfirmed" | "canceled";
};

export type TBookingProp = {
  booking: TBookingExtended;
};

export type TBookingContext = {
  loadingBookings: boolean;
  bookings: TBookingExtended[];
  numberOfTotalBookings: number;
  loadingUsersBookings: boolean;
  usersBookings: TBookingExtended[];
  numberOfUsersBookings: number;
  handleCancelBooking: (_id: string) => void;
};

export type TBookingManagementProp = {
  loadingBookings: boolean;
  bookings: TBookingExtended[];
  searchTerm: string;
};

export type TMyBookingProp = {
  loadingUsersBookings: boolean;
  usersBookings: TBookingExtended[];
  searchTerm: string;
};
