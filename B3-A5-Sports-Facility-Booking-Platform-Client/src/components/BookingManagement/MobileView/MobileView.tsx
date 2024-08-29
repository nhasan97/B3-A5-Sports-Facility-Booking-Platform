import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import { TBookingExtended, TBookingManagementProp } from "@/types/booking.type";
import MobileViewBookingCard from "./MobileViewBookingCard";

const MobileView = ({
  loadingBookings,
  bookings,
  searchTerm,
}: TBookingManagementProp) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[80%] overflow-y-auto rounded-lg mt-6">
      {loadingBookings ? (
        <Loading></Loading>
      ) : bookings?.length > 0 ? (
        bookings
          ?.filter((booking) => {
            return searchTerm.toLowerCase() === ""
              ? booking
              : booking?.user?.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                  booking?.facility?.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  booking?.date
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  booking?.paymentStatus
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  booking?.isBooked
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
          })
          .map((booking: TBookingExtended) => (
            <MobileViewBookingCard
              key={booking._id}
              booking={booking}
            ></MobileViewBookingCard>
          ))
      ) : (
        <NoData text={"No Facilty Found"}></NoData>
      )}
    </div>
  );
};

export default MobileView;
