import Container from "@/components/layouts/RootLayout/Container";
import Title from "@/components/shared/Title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img1 from "../../../assets/images/Screenshot 2024-08-30 203222.png";
import img2 from "../../../assets/images/Screenshot 2024-08-30 203552.png";
import img3 from "../../../assets/images/Screenshot 2024-08-30 204402.png";
import img4 from "../../../assets/images/Screenshot 2024-08-30 212049.png";
import img5 from "../../../assets/images/Screenshot 2024-08-30 212105.png";
import img6 from "../../../assets/images/Screenshot 2024-08-30 212217.png";
import img7 from "../../../assets/images/Screenshot 2024-08-30 212247.png";

const HowDoesItWorkSection = () => {
  const title = {
    mainTitle: "How does it work",
    subTitle: "Heres' how you can make the most of the platform's features",
  };

  return (
    <div className="w-full h-full py-10 my-10 md:my-20 relative">
      <Container>
        <div className="w-full h-full flex flex-col justify-center items-center gap-8 sm:gap-16">
          <Title title={title}></Title>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Visit{" "}
                <a href="/facility-list" className="border-b border-red-700">
                  All Failities Page
                </a>
              </h3>

              <p>
                All Failities Page contains all the available facilities from
                where you'll be abal to choose your desired one.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Click Details Button
              </h3>

              <img src={img1} alt="" className="border my-6" />

              <p>
                Choose your desired facility and click the Details Button on the
                card which will then redirect you to facility details page.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Click Book Now Button
              </h3>
              <img src={img2} alt="" className="border my-6 h-40" />
              <p>
                After viewing details if you desire to book the facility click
                the book now button which will then redirect you to the booking
                page. At this point login is necessary.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Select Date and check availability
              </h3>
              <img src={img4} alt="" className="border my-6 " />
              <img src={img5} alt="" className="border my-6 " />
              <p>
                Click the calender icon and Select the date on which you want to
                enjoy the facility and then hit check button. After that the
                available time slots of that day will appear.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Select Time Slot
              </h3>
              <img src={img3} alt="" className="border my-6" />
              <p>Click on your your desired time slot to select it.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Click Proceed to pay button.
              </h3>

              <p>
                After selecting time slot hit Proceed to pay button which will
                take you to the payment page.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Select payment option
              </h3>
              <img src={img6} alt="" className="border my-6 h-40" />
              <p>
                Select your desired payment option if you want to do online
                payment and then you will be redirected to the final page.
                Otherwise cancel it and you will be redirected to home page. And
                yes! offcorse you can pay on spot!!.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#181818", color: "#757575" }}
              contentArrowStyle={{
                borderRight: "7px solid  #b91c1c",
              }}
              iconStyle={{ background: "#b91c1c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                Click the Success button
              </h3>
              <img src={img7} alt="" className="border my-6 h-40" />
              <p>
                Click the Success button and you are done. You will receive a
                summery of the booking.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
};

export default HowDoesItWorkSection;
