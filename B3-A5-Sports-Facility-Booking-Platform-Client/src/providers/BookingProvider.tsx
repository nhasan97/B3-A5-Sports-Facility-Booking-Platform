import bookingApi from "@/redux/features/booking/bookingApi";
import { TBookingContext } from "@/types/booking.type";
import { TChildren } from "@/types/global.type";
import { createContext } from "react";

export const BookingContext = createContext<TBookingContext | undefined>(
  undefined
);

const BookingProvider = ({ children }: TChildren) => {
  //loading all bookings
  const { isLoading: loadingBookings, data: loadedBookings } =
    bookingApi.useGetBookingsQuery(undefined);

  //loading user specific bookings
  const { isLoading: loadingUsersBookings, data: loadedUsersBookings } =
    bookingApi.useGetUserSpecificBookingsQuery(undefined);

  const bookingInfo: TBookingContext = {
    loadingBookings,
    bookings: loadedBookings?.data,
    numberOfTotalBookings: loadedBookings?.data?.length,
    loadingUsersBookings,
    usersBookings: loadedUsersBookings?.data,
    numberOfUsersBookings: loadedUsersBookings?.data?.length,
  };

  return (
    <BookingContext.Provider value={bookingInfo}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
