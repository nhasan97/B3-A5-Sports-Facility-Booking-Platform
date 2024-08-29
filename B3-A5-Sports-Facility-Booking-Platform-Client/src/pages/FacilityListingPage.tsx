import Browser from "@/components/FacilityListingPage/Browser";
import FacilityCard from "@/components/FacilityListingPage/FacilityCard";
import Container from "@/components/layouts/RootLayout/Container";
import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import useFacilityContext from "@/hooks/useFacilityContext";
import { TFacility, TFacilityContext } from "@/types/facility.type";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { GrNext } from "react-icons/gr";

const FacilityListingPage = () => {
  const { loadingFacilities, facilities, setItemsPerPage } =
    useFacilityContext() as TFacilityContext;

  useEffect(() => {
    //   setCategoryToLoad(category);
    setItemsPerPage(5);
  }, [setItemsPerPage]);

  return (
    <div className="w-full h-full">
      <Container>
        <Helmet>
          <title>Sport Odyssey | Facility Listing</title>
        </Helmet>

        <div className="w-full h-screen flex flex-col justify-center items-center gap-5 md:gap-10">
          {/* <SiteTitle title={"Products"}></SiteTitle> */}

          <p className="w-full h-[5%] flex items-center text-left text-[#757575]">
            <span>Home</span> <GrNext></GrNext>
            <span className=" font-medium">Facility Listing</span>
          </p>

          {/* browser */}
          <Browser pagination={true}></Browser>

          {loadingFacilities ? (
            <Loading></Loading>
          ) : facilities?.length > 0 ? (
            <div className="w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 my-6 overflow-y-auto">
              {facilities.map((facility: TFacility) => (
                <FacilityCard key={facility._id} facility={facility} />
              ))}
            </div>
          ) : (
            <NoData text={"No Facility Found"}></NoData>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FacilityListingPage;
