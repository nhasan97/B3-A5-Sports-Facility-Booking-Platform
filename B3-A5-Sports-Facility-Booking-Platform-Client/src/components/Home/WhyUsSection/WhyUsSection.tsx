import Container from "@/components/layouts/RootLayout/Container";
import Title from "@/components/shared/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TWhyUs } from "@/types/whyUs.type";
import WhyUsCard from "./WhyUsCard";

const WhyUsSection = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch("jsonDataFiles/whyUs.json")
      .then((res) => res.json())
      .then((data) => {
        setPoints(data);
      });
  }, []);

  const title = {
    mainTitle: "Why Us",
    subTitle: "Your Game, Our Priority",
  };

  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <div className="w-full h-full py-10 my-10 md:my-20">
      <Container>
        <div className="w-full h-full flex flex-col items-center gap-8 sm:gap-16">
          <Title title={title}></Title>

          <div className="w-full full">
            <Carousel
              plugins={[plugin.current]}
              className="w-[70%] sm:w-[80%] md:w-[90%] xl:w-[95%] 2xl:w-full flex items-center mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {points.map((point: TWhyUs) => (
                  <CarouselItem
                    key={point?.id}
                    className="sm:basis-1/1 md:basis-1/1 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                  >
                    <div className="p-1">
                      <WhyUsCard point={point}></WhyUsCard>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUsSection;
