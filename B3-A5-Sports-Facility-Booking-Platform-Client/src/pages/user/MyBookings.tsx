import BookingBrowser from "@/components/BookingManagement/BookingBrowser";
import DashboardContainer from "@/components/layouts/dashboardLayout/DashboardContainer";
import MobileView from "@/components/MyBookings/MobileView/MobileView";
import TabPCView from "@/components/MyBookings/TabPCView/TabPCView";
import Title from "@/components/shared/Title";
import useBookingContext from "@/hooks/useBookingContext";
import { TBookingContext } from "@/types/booking.type";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  //States for browsing
  const [searchTerm, setSearchTerm] = useState("");
  const { loadingUsersBookings, usersBookings } =
    useBookingContext() as TBookingContext;

  return (
    <div className="h-screen">
      <DashboardContainer>
        <Helmet>
          <title>Sport Odyssey | Dashboard | My Bookings</title>
        </Helmet>

        <Title title={{ mainTitle: "My Bookings" }}></Title>

        {/* browser */}
        <BookingBrowser setSearchTerm={setSearchTerm}></BookingBrowser>

        {/*tab pc view */}
        <TabPCView
          loadingUsersBookings={loadingUsersBookings}
          usersBookings={usersBookings}
          searchTerm={searchTerm}
        />

        {/* mobile view */}
        <MobileView
          loadingUsersBookings={loadingUsersBookings}
          usersBookings={usersBookings}
          searchTerm={searchTerm}
        />
      </DashboardContainer>
    </div>
  );
};

export default MyBookings;
