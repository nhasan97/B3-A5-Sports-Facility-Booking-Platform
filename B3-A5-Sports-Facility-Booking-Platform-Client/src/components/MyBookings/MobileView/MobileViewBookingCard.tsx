import { TBookingProp } from "@/types/booking.type";
import BookingDetailsModal from "./BookingDetailsModal";

const MobileViewBookingCard = ({ booking }: TBookingProp) => {
  return (
    <div className="h-fit bg-white flex justify-between items-center p-5 space-y-3 rounded-md shadow-md">
      <div className="">
        <h2 className=" text-[#5D7E5F] font-semibold ">
          {booking?.facility?.name}
        </h2>
      </div>
      <div>
        <BookingDetailsModal booking={booking}></BookingDetailsModal>
      </div>
    </div>
  );
};

export default MobileViewBookingCard;
