import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";

import { TBookingExtended, TBookingManagementProp } from "@/types/booking.type";
import BookingTableRow from "./BookingTableRow";

const TabPCView = ({
  loadingBookings,
  bookings,
  searchTerm,
}: TBookingManagementProp) => {
  return (
    <div className="bg-white hidden sm:block w-full h-[80%] overflow-y-auto rounded-lg border">
      {loadingBookings ? (
        <Loading></Loading>
      ) : bookings?.length > 0 ? (
        <table className="w-full">
          {/* head */}
          <thead>
            <tr className="flex  justify-between items-center text-[#757575] p-5 border-b">
              <th className="flex-1">Customer</th>
              <th className="flex-1">Facility</th>
              <th className="flex-1">Booked Date</th>
              <th className="flex-1">Start Time</th>
              <th className="flex-1">End Time</th>
              <th className="flex-1">Payment</th>
              <th className="flex-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {bookings
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
                <BookingTableRow key={booking._id} booking={booking} />
              ))}
          </tbody>
        </table>
      ) : (
        <NoData text={"No Facilities Found"}></NoData>
      )}
    </div>
  );
};

export default TabPCView;
