import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import { TBookingExtended, TMyBookingProp } from "@/types/booking.type";
import MobileViewBookingCard from "./MobileViewBookingCard";

const MobileView = ({
  loadingUsersBookings,
  usersBookings,
  searchTerm,
}: TMyBookingProp) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[80%] overflow-y-auto rounded-lg mt-6">
      {loadingUsersBookings ? (
        <Loading></Loading>
      ) : usersBookings?.length > 0 ? (
        usersBookings
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
        <NoData text={"No Bookings Found"}></NoData>
      )}
    </div>
  );
};

export default MobileView;
