import FacilityDetailsModal from "@/components/BookingManagement/FacilityDetailsModal";
import PaymentDetailsModal from "@/components/BookingManagement/PaymentDetailsModal";
import { Button } from "@/components/ui/button";
import useBookingContext from "@/hooks/useBookingContext";
import { TBookingContext, TBookingProp } from "@/types/booking.type";

const BookingTableRow = ({ booking }: TBookingProp) => {
  const { handleCancelBooking } = useBookingContext() as TBookingContext;

  return (
    <tr className="flex justify-between items-center text-[#808080] text-center p-5 border-b">
      <td className="flex-1 flex justify-center items-center gap-2 font-semibold text-[#5D7E5F]">
        {booking?.facility?.name}
        <FacilityDetailsModal
          facility={booking.facility}
        ></FacilityDetailsModal>
      </td>

      <td className="flex-1">{booking?.date}</td>

      <td className="flex-1">{booking?.startTime}</td>

      <td className="flex-1">{booking?.endTime}</td>

      <td className="flex-1">
        <PaymentDetailsModal
          payableAmount={booking?.payableAmount}
          transactionID={booking?.transactionID}
          paymentStatus={booking?.paymentStatus}
        ></PaymentDetailsModal>
      </td>

      <td className="flex-1">{booking?.isBooked}</td>

      <td className="flex-1">
        <Button onClick={() => handleCancelBooking(booking?._id as string)}>
          Cancel Booking
        </Button>
      </td>
    </tr>
  );
};

export default BookingTableRow;
