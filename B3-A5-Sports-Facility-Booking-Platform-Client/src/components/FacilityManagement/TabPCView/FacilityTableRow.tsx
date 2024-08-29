import { Button } from "../../ui/button";
import { MdDelete } from "react-icons/md";
import { TFacilityContext, TFacilityProp } from "@/types/facility.type";
import DetailsFacilityModal from "../DetailsFacilityModal";
import EditFacilityModal from "../EditFacilityModal";
import useFacilityContext from "@/hooks/useFacilityContext";

const FacilityTableRow = ({ facility }: TFacilityProp) => {
  const { handleDeleteFacility } = useFacilityContext() as TFacilityContext;

  return (
    <tr className="flex justify-between items-center text-[#808080] text-center p-5 border-b">
      <td className="flex-1 justify-between items-center">
        <img
          src={facility?.imageUrl}
          className="size-14 mx-auto p-[2px] border-2 border-[#5D7E5F] rounded-full"
        ></img>
      </td>

      <td className="flex-1 font-semibold text-[#5D7E5F]">{facility?.name}</td>

      <td className="flex-1">
        <DetailsFacilityModal facility={facility}></DetailsFacilityModal>
      </td>

      <td className="flex-1">${facility?.pricePerHour}</td>

      <td className="flex-1">{facility?.location}</td>

      <td className="flex-1">
        <EditFacilityModal facility={facility}></EditFacilityModal>
        <Button
          className="bg-transparent hover:bg-red-100 text-2xl sm:text-xl text-[#757575] hover:text-red-600 rounded-full"
          onClick={() => handleDeleteFacility(facility?._id as string)}
        >
          <MdDelete />
        </Button>
      </td>
    </tr>
  );
};

export default FacilityTableRow;
