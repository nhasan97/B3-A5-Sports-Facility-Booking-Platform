import BookingBrowser from "@/components/BookingManagement/BookingBrowser";
import MobileView from "@/components/BookingManagement/MobileView/MobileView";
import TabPCView from "@/components/BookingManagement/TabPCView/TabPCView";
import DashboardContainer from "@/components/layouts/dashboardLayout/DashboardContainer";
import Title from "@/components/shared/Title";
import useBookingContext from "@/hooks/useBookingContext";
import { TBookingContext } from "@/types/booking.type";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const BookingManagement = () => {
  //States for browsing
  const [searchTerm, setSearchTerm] = useState("");
  const { loadingBookings, bookings } = useBookingContext() as TBookingContext;

  return (
    <div className="h-screen">
      <DashboardContainer>
        <Helmet>
          <title>Sport Odyssey | Dashboard | Bookings</title>
        </Helmet>

        <Title title={{ mainTitle: "Bookings" }}></Title>

        {/* browser */}
        <BookingBrowser setSearchTerm={setSearchTerm}></BookingBrowser>

        {/*tab pc view */}
        <TabPCView
          loadingBookings={loadingBookings}
          bookings={bookings}
          searchTerm={searchTerm}
        />

        {/* mobile view */}
        <MobileView
          loadingBookings={loadingBookings}
          bookings={bookings}
          searchTerm={searchTerm}
        />
      </DashboardContainer>
    </div>
  );
};

export default BookingManagement;
