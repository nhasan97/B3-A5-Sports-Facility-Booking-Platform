import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import { TFacility, TFacilityManagementProp } from "@/types/facility.type";
import MobileViewFacilityCard from "./MobileViewFacilityCard";

const MobileView = ({
  loadingFacilities,
  facilities,
  loadingNumberOfFacilities,
}: TFacilityManagementProp) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[80%] overflow-y-auto rounded-lg mt-6">
      {loadingFacilities || loadingNumberOfFacilities ? (
        <Loading></Loading>
      ) : facilities?.length > 0 ? (
        facilities?.map((facility: TFacility) => (
          <MobileViewFacilityCard
            key={facility._id}
            facility={facility}
          ></MobileViewFacilityCard>
        ))
      ) : (
        <NoData text={"No Facilty Found"}></NoData>
      )}
    </div>
  );
};

export default MobileView;
