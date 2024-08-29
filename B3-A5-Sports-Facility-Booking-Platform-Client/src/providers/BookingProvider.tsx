import bookingApi from "@/redux/features/booking/bookingApi";
import { TBookingContext } from "@/types/booking.type";
import { TChildren } from "@/types/global.type";
import { createContext } from "react";
import { toast } from "sonner";

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

  //destructuring DB operation functions from hooks
  const [cancelBooking] = bookingApi.useCancelBookingMutation();

  //handling cancel booking
  const handleCancelBooking = (_id: string) => {
    toast.warning("Are you sure? You won't be able to revert this!", {
      action: {
        label: "Yes, cancel it",
        onClick: async () => {
          try {
            // const res =
            await cancelBooking(_id).unwrap(); // displaySuccessToast(res);
          } catch (err) {
            // toast.error(err.data.message, { duration: 2000 });
          }
        },
      },
      cancel: {
        label: "No, don't Cancel",
        onClick: () => toast.info("Operation Cancelled!", { duration: 2000 }),
      },
    });
  };

  const bookingInfo: TBookingContext = {
    loadingBookings,
    bookings: loadedBookings?.data,
    numberOfTotalBookings: loadedBookings?.data?.length,
    loadingUsersBookings,
    usersBookings: loadedUsersBookings?.data,
    numberOfUsersBookings: loadedUsersBookings?.data?.length,
    handleCancelBooking,
  };

  return (
    <BookingContext.Provider value={bookingInfo}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
