import Container from "@/components/layouts/RootLayout/Container";
import Loading from "@/components/shared/Loading";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import facilityApi from "@/redux/features/facility/facilityApi";
import { Link, useParams } from "react-router-dom";

const FacilityDetails = () => {
  const loadedId = useParams();

  const { isLoading: loadingSingleFacility, data: loadedFacility } =
    facilityApi.useGetSingleFacilityQuery(loadedId.id);

  return (
    <div className="w-full h-full bg-[url(../public/leaf2.png)] bg-no-repeat bg-right-top bg-contain bg-fixed">
      <Container>
        <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center gap-10">
          <Title title={{ mainTitle: "Facility Details" }}></Title>

          {loadingSingleFacility ? (
            <Loading />
          ) : (
            <div className="w-full space-y-16">
              <div className="w-full flex flex-col xl:flex-row gap-6">
                <div className="w-full xl:w-1/2">
                  <img
                    src={loadedFacility?.data?.imageUrl}
                    alt=""
                    className="w-full xl:h-[500px] object-fill rounded-lg"
                  />
                </div>
                <div className="w-full xl:w-1/2 text-left text-[#696969] text-sm md:text-base flex flex-col justify-center gap-4 pl-6 border-l border-[#696969]">
                  <h1 className="text-[rgba(255,255,255,.65)] text-lg md:text-3xl font-medium">
                    {loadedFacility?.data?.name}
                  </h1>
                  <p>{loadedFacility?.data?.description}</p>
                  <p>Location | {loadedFacility?.data?.location}</p>
                  <p>Price/Hour | {loadedFacility?.data?.pricePerHour}</p>
                  <Link to={`/booking-page/${loadedId.id}`}>
                    <Button className="md:w-1/2 hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-base md:text-lg border hover:border-red-700 border-transparent space-x-2 rounded-lg">
                      Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="font-rac text-[rgba(255,255,255,.65)] text-3xl font-medium">
                  You May Also Like
                </h1>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FacilityDetails;
