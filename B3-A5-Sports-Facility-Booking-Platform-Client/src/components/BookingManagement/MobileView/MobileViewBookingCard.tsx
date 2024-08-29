import { TBookingProp } from "@/types/booking.type";
import BookingDetailsModal from "./BookingDetailsModal";

const MobileViewBookingCard = ({ booking }: TBookingProp) => {
  return (
    <div className="h-fit bg-white flex justify-between items-center p-5 space-y-3 rounded-md shadow-md">
      <div className="">
        <h2 className=" text-[#5D7E5F] font-semibold ">
          {booking?.facility?.name}
        </h2>

        <p className="text-[#808080] text-sm sm:text-base leading-7">
          <span className="text-[#494949] font-medium">Customer: </span>
          {booking?.user?.name}
        </p>
      </div>
      <div>
        <BookingDetailsModal booking={booking}></BookingDetailsModal>
      </div>
    </div>
  );
};

export default MobileViewBookingCard;
