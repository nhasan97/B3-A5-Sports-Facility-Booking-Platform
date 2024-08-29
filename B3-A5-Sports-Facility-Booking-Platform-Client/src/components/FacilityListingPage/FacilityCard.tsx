import { TFacilityProp } from "@/types/facility.type";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const FacilityCard = ({ facility }: TFacilityProp) => {
  return (
    <div className="w-full bg-gradient-to-r from-[#121213] via-[#19191a] to-[#121213] p-1 space-y-3 rounded-xl">
      <div className="rounded-xl h-[280px]">
        <img
          src={facility?.imageUrl}
          alt=""
          className="w-full h-full rounded-xl object-fill"
        />
      </div>

      <div className="flex flex-col gap-2 px-2 py-3 text-center">
        <h6 className="text-lg text-[rgba(255,255,255,.65)] font-medium">
          {facility?.name}
        </h6>

        <h5 className="text-xl text-[#696969] font-bold">
          ${facility?.pricePerHour}
        </h5>
      </div>

      <div className="w-full flex justify-between items-center gap-2">
        <Link to={`/facility-details/${facility?._id}`} className="w-full">
          <Button className="w-full hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-lg border hover:border-red-700 border-transparent space-x-2 rounded-lg">
            <i className="fa-solid fa-eye"></i> <span>Details</span>
          </Button>
        </Link>
        {/* <Button className="hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-lg rounded-[20px] border hover:border-red-700 border-transparent">
          Book Now
        </Button> */}
      </div>
    </div>
  );
};

export default FacilityCard;
