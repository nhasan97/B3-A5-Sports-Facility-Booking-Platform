import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useBookingContext from "@/hooks/useBookingContext";
import { TBookingContext, TBookingProp } from "@/types/booking.type";
import { MdInfo } from "react-icons/md";

const BookingDetailsModal = ({ booking }: TBookingProp) => {
  const { handleCancelBooking } = useBookingContext() as TBookingContext;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-[#98b2992f] text-2xl sm:text-xl text-[#757575] hover:text-[#5D7E5F] rounded-full">
          <MdInfo />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[85%] flex flex-col justify-center">
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-8 overflow-y-auto">
          <div className="space-y-1 p-1">
            <h1 className="text-lg font-medium">Booking Details</h1>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">Date: </span>
              {booking?.date}
            </p>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">Start Time: </span>
              {booking?.startTime}
            </p>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">End Time: </span>
              {booking?.endTime}
            </p>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">Status: </span>
              {booking?.isBooked}
            </p>
          </div>

          <div className="space-y-1 p-1">
            <h1 className="text-lg font-medium">Facility Details</h1>
            <div className="flex justify-start items-center gap-2">
              <img
                src={booking?.facility?.imageUrl}
                alt=""
                className="w-20 h-20 object-fill mb-4 rounded-lg"
              />
              <p className="text-lg text-[#757575]">
                {booking?.facility?.name}
              </p>
            </div>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              {booking?.facility?.description}
            </p>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">Price/Hour:</span> $
              {booking?.facility?.pricePerHour}
            </p>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">Location:</span>{" "}
              {booking?.facility?.location}
            </p>
          </div>

          <div className="space-y-1 p-1">
            <h1 className="text-lg font-medium">Payment Details</h1>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">Total Bill: </span>$
              {booking?.payableAmount}
            </p>
            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">
                Transaction ID:
              </span>
              {booking?.transactionID}
            </p>

            <p className="text-[#808080] text-sm sm:text-base leading-7">
              <span className="text-[#494949] font-medium">
                Payment Status:
              </span>
              {booking?.paymentStatus.toUpperCase()}
            </p>
          </div>

          <div>
            <Button onClick={() => handleCancelBooking(booking?._id as string)}>
              Cancel Booking
            </Button>
          </div>
        </div>
        <DialogClose asChild>
          <Button className="mt-4 bg-[#5D7E5F] text-lg font-semibold mb-5 space-x-2 rounded-full">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsModal;
