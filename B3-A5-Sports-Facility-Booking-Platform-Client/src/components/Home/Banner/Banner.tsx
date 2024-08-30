import { Button } from "../../ui/button";
import { RiArrowRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import BannerCard from "./BannerCard";
import { TOffer } from "@/types/offer.type";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "@/components/layouts/RootLayout/Container";

const Banner = () => {
  const navigate = useNavigate();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("jsonDataFiles/specialOffers.json")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: -1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full bg-[url(../public/bannerBg.png)] bg-no-repeat bg-center bg-cover mb-40">
      <Container>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-3 py-40 relative">
          <div className="w-full md:w-1/2 h-full text-center sm:text-left space-y-3 lg:space-y-6">
            <h1 className="text-center sm:text-left text-white text-3xl md:text-[40px] lg:text-[50px] font-bold leading-[40px] md:leading-[55px] lg:leading-[70px]">
              Sport Odyssey
            </h1>

            <p className="text-[#b1b1b1] text-base md:text-lg leading-6 text-justify">
              Your go-to for easy sports facility bookings. Find, book, and play
              at your favorite spots with just a few clicks.
            </p>

            <Button
              className="px-8 hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-lg rounded-lg border hover:border-red-700 border-transparent"
              onClick={() => navigate("/facility-list")}
            >
              Book Now
              <RiArrowRightLine />
            </Button>
          </div>

          <div className="w-full h-fit absolute bottom-0 right-0 translate-y-[50%]">
            <Slider {...settings}>
              {offers.map((offer: TOffer) => (
                <BannerCard key={offer.title} offer={offer} />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
