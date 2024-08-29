import { BookingContext } from "@/providers/BookingProvider";
import { useContext } from "react";

const useBookingContext = () => {
  const bookingInfo = useContext(BookingContext);
  return bookingInfo;
};

export default useBookingContext;
