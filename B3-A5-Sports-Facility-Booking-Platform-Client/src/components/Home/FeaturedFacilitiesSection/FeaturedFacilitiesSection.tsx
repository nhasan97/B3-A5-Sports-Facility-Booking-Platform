import Container from "@/components/layouts/RootLayout/Container";
import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import useFacilityContext from "@/hooks/useFacilityContext";
import { TFacility, TFacilityContext } from "@/types/facility.type";
import FeaturedFacilityCard from "./FeaturedFacilityCard";
import { Button } from "@/components/ui/button";
import Title from "@/components/shared/Title";
import { Link } from "react-router-dom";

const FeaturedFacilitiesSection = () => {
  const { loadingFacilities, facilities } =
    useFacilityContext() as TFacilityContext;

  const title = {
    mainTitle: "Featured Facilities",
    subTitle: "Facilities that are popular now",
  };

  return (
    <div className="w-full h-full py-10 my-10 md:my-20 relative">
      <Container>
        <div className="w-full h-full flex flex-col justify-center items-center gap-8 sm:gap-16">
          <Title title={title}></Title>

          {loadingFacilities ? (
            <Loading></Loading>
          ) : facilities?.length > 0 ? (
            <div className="w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 my-5 overflow-y-auto">
              {facilities.slice(0, 4).map((facility: TFacility) => (
                <FeaturedFacilityCard key={facility._id} facility={facility} />
              ))}
            </div>
          ) : (
            <NoData text={"No Facilities Found"}></NoData>
          )}

          <div className="text-center">
            <Link to="/facility-list">
              <Button className="px-8 hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-lg rounded-lg border hover:border-red-700 border-transparent">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedFacilitiesSection;
