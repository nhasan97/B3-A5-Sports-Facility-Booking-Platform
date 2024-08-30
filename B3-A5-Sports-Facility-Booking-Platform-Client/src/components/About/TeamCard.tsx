import { TTeamMemberProp } from "@/types/team.type";

const TeamCard = ({ member }: TTeamMemberProp) => {
  const { imageUrl, name, designation, say } = member;
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
          {designation}
        </p>
        <p className="text-sm md:text-base text-[#696969] text-justify">
          {say}
        </p>
      </div>
      <div className="flex justify-start items-center gap-6 p-3">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-discord"></i>
      </div>
    </div>
  );
};

export default TeamCard;
