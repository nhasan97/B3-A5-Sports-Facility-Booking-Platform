import DashboardContainer from "@/components/layouts/dashboardLayout/DashboardContainer";
import Loading from "@/components/shared/Loading";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import useBookingContext from "@/hooks/useBookingContext";
import useCurrentDate from "@/hooks/useCurrentDate";
import useFacilityContext from "@/hooks/useFacilityContext";
import userApi from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { TUser } from "@/types/auth.type";
import { TBookingContext } from "@/types/booking.type";
import { TFacilityContext } from "@/types/facility.type";
import { verifyToken } from "@/utils/verifyToken";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const UserOverView = () => {
  const today = useCurrentDate();
  const { token } = useAppSelector((currentState) => currentState.auth);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  const { isLoading, data: userData } = userApi.useGetUserQuery(
    (user as TUser)?.id,
    { skip: !token }
  );

  const { loadingNumberOfFacilities, numberOfFacilities } =
    useFacilityContext() as TFacilityContext;

  const { loadingUsersBookings, numberOfUsersBookings } =
    useBookingContext() as TBookingContext;

  return (
    <div className="h-screen">
      <DashboardContainer>
        <Helmet>
          <title>Sport Odyssey | Dashboard | OverView</title>
        </Helmet>

        <Title title={{ mainTitle: "Overview" }}></Title>

        {isLoading || loadingNumberOfFacilities || loadingUsersBookings ? (
          <Loading />
        ) : (
          <div className="w-full h-full space-y-6 overflow-y-auto">
            <div className="w-full bg-[#181717] flex flex-col md:flex-row gap-6 p-6 rounded-lg">
              <div className="md:w-1/2 space-y-20">
                <p className="text-base text-[#a5a5a5]">{today}</p>
                <div className="space-y-3">
                  <h1 className="text-[#757575] text-3xl">
                    Hey, {userData.data.name}! Welcome Back!
                  </h1>
                  <p className="text-base text-[#a5a5a5]">
                    Here's a quick overview for you
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={userData.data.imageUrl}
                  alt=""
                  className="w-full h-[200px] md:h-[300px] 2xl:h-[600px] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full bg-[#181717] p-6 space-y-4 rounded-lg">
                <h2 className="text-[#757575] text-3xl">Total Facilities</h2>
                <p className="text-[#d4d4d4] text-7xl">{numberOfFacilities}</p>
                <Link to="/facility-list">
                  <Button>View Facilities</Button>
                </Link>
              </div>
              <div className="w-full bg-[#181717] p-6 space-y-4 rounded-lg">
                <h2 className="text-[#757575] text-3xl">Yours Bookings</h2>
                <p className="text-[#d4d4d4] text-7xl">
                  {numberOfUsersBookings}
                </p>
                <Link to="/user-dashboard/user-dashboard-bookings">
                  <Button>View Bookings</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </DashboardContainer>
    </div>
  );
};

export default UserOverView;
