import { Button } from "../ui/button";
import { MdInfo } from "react-icons/md";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { TFacilityProp } from "@/types/facility.type";

const FacilityDetailsModal = ({ facility }: TFacilityProp) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-[#98b2992f] text-2xl sm:text-xl text-[#757575] hover:text-[#5D7E5F] rounded-full">
          <MdInfo />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <img src={facility?.imageUrl} alt="" className="w-full mb-4" />
          <DialogTitle className="text-[#757575]">{facility?.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-[#808080] text-sm sm:text-base leading-7">
            {facility?.description}
          </p>
          <p className="text-[#808080] text-sm sm:text-base leading-7">
            <span className="text-[#494949] font-medium">Price/Hour:</span> $
            {facility?.pricePerHour}
          </p>
          <p className="text-[#808080] text-sm sm:text-base leading-7">
            <span className="text-[#494949] font-medium">Location:</span>{" "}
            {facility?.location}
          </p>
        </div>

        <DialogClose asChild>
          <Button className="mt-4 bg-[#5D7E5F] text-lg font-semibold mb-5 space-x-2 rounded-full">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default FacilityDetailsModal;
