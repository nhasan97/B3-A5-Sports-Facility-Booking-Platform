import { TOfferPorp } from "@/types/offer.type";

const BannerCard = ({ offer }: TOfferPorp) => {
  const { title, mainOffer } = offer;

  return (
    <div className="text-center p-20 bg-[url(../public/bannerCardBg.png)] bg-no-repeat bg-center bg-contain">
      <p className="text-[#757575] text-base">{title}</p>
      <p className="text-[#646464] text-base">{mainOffer}</p>
      {/* <p>{title}</p> */}
    </div>
  );
};

export default BannerCard;
