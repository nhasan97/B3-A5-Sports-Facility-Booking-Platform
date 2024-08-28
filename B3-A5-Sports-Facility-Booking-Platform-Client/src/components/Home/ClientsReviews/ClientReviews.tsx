import { useEffect } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from "../../shared/Title";
import ReviewCard from "./ReviewCard";
import { TReview } from "@/types/clientReview.type";
import Container from "@/components/layouts/RootLayout/Container";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("clientReviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const title = {
    mainTitle: "Clients Reviews",
    subTitle: "What our clients say",
  };

  // const settings = {
  //   dots: true,
  //   className: "center",
  //   centerMode: true,
  //  centerPadding: "60px",
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   speed: 3000,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  // };

  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="w-full h-full py-10 my-10 md:my-20">
      <Container>
        <div className="w-full h-full flex flex-col items-center gap-8 sm:gap-16">
          <Title title={title}></Title>

          <div className="w-[96%]">
            <Slider {...settings}>
              {reviews.map((review: TReview) => (
                <ReviewCard key={review.name} review={review}></ReviewCard>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientReviews;
