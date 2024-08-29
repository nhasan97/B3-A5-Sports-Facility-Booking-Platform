import { TBookingProp } from "@/types/booking.type";
import CustomerDetailsModel from "../CustomerDetailsModel";
import FacilityDetailsModal from "../FacilityDetailsModal";
import PaymentDetailsModal from "../PaymentDetailsModal";

const BookingTableRow = ({ booking }: TBookingProp) => {
  return (
    <tr className="flex justify-between items-center text-[#808080] text-center p-5 border-b">
      <td className="flex-1 flex justify-center items-center gap-2 font-semibold text-[#5D7E5F]">
        {booking?.user?.name}
        <CustomerDetailsModel user={booking.user}></CustomerDetailsModel>
      </td>

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
    </tr>
  );
};

export default BookingTableRow;
