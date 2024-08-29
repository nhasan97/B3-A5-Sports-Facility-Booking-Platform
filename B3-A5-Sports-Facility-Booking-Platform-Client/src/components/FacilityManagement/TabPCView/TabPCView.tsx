import Loading from "@/components/shared/Loading";
import NoData from "@/components/shared/NoData";
import { TFacility, TFacilityManagementProp } from "@/types/facility.type";
import FacilityTableRow from "./FacilityTableRow";

const TabPCView = ({
  loadingFacilities,
  facilities,
  loadingNumberOfFacilities,
}: TFacilityManagementProp) => {
  return (
    <div className="bg-white hidden sm:block w-full h-[80%] overflow-y-auto rounded-lg border">
      {loadingFacilities || loadingNumberOfFacilities ? (
        <Loading></Loading>
      ) : facilities?.length > 0 ? (
        <table className="w-full">
          {/* head */}
          <thead>
            <tr className="flex  justify-between items-center text-[#757575] p-5 border-b">
              <th className="flex-1">Image</th>
              <th className="flex-1">Name</th>
              <th className="flex-1">Details</th>
              <th className="flex-1">Price Per Hour</th>
              <th className="flex-1">Location</th>
              <th className="flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {facilities?.map((facility: TFacility) => (
              <FacilityTableRow key={facility._id} facility={facility} />
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
