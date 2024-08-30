import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TWhyUsPorp } from "@/types/whyUs.type";

const WhyUsCard = ({ point }: TWhyUsPorp) => {
  const { id, title, description, icon } = point;

  return (
    <div
      className={`my-anchor-element-${id} flex flex-col justify-center items-center gap-3 text-center px-16 py-20 bg-[url(../public/whyUsCardBg.png)] bg-no-repeat bg-center bg-cover`}
    >
      <img src={icon} alt="" className="w-[60px] h-[60px]" />
      <p className="text-[#757575] text-2xl">{title}</p>
      <Tooltip anchorSelect={`.my-anchor-element-${id}`} place="bottom">
        {description}
      </Tooltip>
    </div>
  );
};

export default WhyUsCard;
