import { TFacilityProp } from "@/types/facility.type";

const FeaturedFacilityCard = ({ facility }: TFacilityProp) => {
  const { imageUrl, name, description } = facility;

  return (
    <div className="bg-gradient-to-r from-[#121213] via-[#19191a] to-[#121213] text-white text-lg shadow-xl rounded-xl border-b border-red-800">
      <figure className="p-1">
        <img
          src={imageUrl}
          alt="facility photo"
          className="rounded-xl w-full h-[200px] object-fill"
        />
      </figure>
      <div className="p-3 space-y-2">
        <h2 className="capitalize text-lg text-[rgba(255,255,255,.65)] font-semibold">
          {name}
        </h2>
        <p className="text-sm md:text-base text-[#696969] text-justify">
          {description}
        </p>
        {/*<div className=" justify-between items-center">
          

          <div className="flex gap-1">
             <button
              className="btn btn-circle bg-transparent text-white hover:text-red-600 border-none"
              onClick={handleAddToServiceList}
              disabled={role === "admin"}
            >
              <PiListPlusBold className=" text-xl" />
            </button> 

             <Link
              to={`/service-details/${_id}`}
              className="btn btn-circle bg-transparent text-white hover:text-red-600 border-none"
            >
              <i className="fa-solid fa-arrow-right text-xl"></i>
            </Link> 
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default FeaturedFacilityCard;
