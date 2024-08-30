import TeamCard from "@/components/About/TeamCard";
import Container from "@/components/layouts/RootLayout/Container";
import Title from "@/components/shared/Title";
import { TTeamMember } from "@/types/team.type";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("jsonDataFiles/team.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  const title = {
    mainTitle: "About Us",
    subTitle: "Who we are",
  };

  return (
    <div className="w-full h-full">
      <Container>
        <Helmet>
          <title>Sport Odyssey | Contact Us</title>
        </Helmet>

        <div className="w-full min-h-screen flex flex-col gap-16">
          <Title title={title}></Title>

          <div className="w-full px-20">
            <h1 className="text-[#757575] text-2xl text-center font-semibold mb-6">
              Our purpose and value
            </h1>
            <p className="text-sm md:text-base text-center text-[#696969]">
              Our purpose is to simplify the process of booking sports
              facilities, making it quick and hassle-free for users to find and
              reserve their preferred venues.
            </p>
            <b></b>
            <p className="text-sm md:text-base text-center text-[#696969]">
              We offer real-time availability, easy booking, and a wide
              selection of facilities, ensuring that athletes and sports
              enthusiasts can focus on what they love—playing the game.
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-[#757575] text-2xl text-center font-semibold mb-6">
              Our Team
            </h1>
            <div className="flex justify-between items-center">
              {members.map((member: TTeamMember) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-[#757575] text-2xl font-semibold mb-6">
              History & Milestones
            </h1>
            <div className="mt-16">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#181818", color: "#757575" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #b91c1c",
                  }}
                  date="2020"
                  iconStyle={{ background: "#b91c1c", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                    The Beginning
                  </h3>

                  <p>
                    The idea for Sport Odyssey was born out of frustration with
                    the complicated process of booking sports facilities. Our
                    founders, passionate athletes themselves, set out to create
                    a solution that would make facility reservations effortless
                    and accessible.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#181818", color: "#757575" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #b91c1c",
                  }}
                  date="2021"
                  iconStyle={{ background: "#b91c1c", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                    Platform Launch
                  </h3>

                  <p>
                    After a year of development and testing, we launched our
                    platform with a focus on user-friendly design and seamless
                    booking. Initial feedback was overwhelmingly positive,
                    confirming the need for a service like ours.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#181818", color: "#757575" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #b91c1c",
                  }}
                  date="2022"
                  iconStyle={{ background: "#b91c1c", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                    Expansion and Partnerships
                  </h3>

                  <p>
                    We expanded our network by partnering with major sports
                    facilities across the region, offering more options to our
                    users. Our platform introduced new features like instant
                    booking confirmations and a loyalty program, enhancing the
                    user experience.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#181818", color: "#757575" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #b91c1c",
                  }}
                  date="2023"
                  iconStyle={{ background: "#b91c1c", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                    Going National
                  </h3>

                  <p>
                    With increasing demand, we scaled our operations nationwide,
                    bringing our service to more cities and communities. We also
                    launched a mobile app, making it even easier for users to
                    book on the go.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{ background: "#181818", color: "#757575" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #b91c1c",
                  }}
                  date="2024"
                  iconStyle={{ background: "#b91c1c", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-[#aaaaaa]">
                    Innovation and Growth
                  </h3>

                  <p>
                    Continuing our mission to improve the booking experience, we
                    introduced AI-powered recommendations and dynamic pricing
                    models. Our user base surpassed 1 million, marking a
                    significant milestone in our journey.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>

          <div className="w-full py-20">
            <h1 className="text-[#757575] text-2xl font-semibold mb-6">
              Contact Info
            </h1>
            <p className="text-sm md:text-base text-[#696969]">
              <span className="text-[#a5a5a5] font-medium">Email: </span>
              Sample@gmail.com
            </p>
            <p className="text-sm md:text-base text-[#696969]">
              <span className="text-[#a5a5a5] font-medium">Cell: </span>
              +8943465445
            </p>
            <p className="text-sm md:text-base text-[#696969]">
              <span className="text-[#a5a5a5] font-medium">
                Office Location:{" "}
              </span>
              house# 29, sarwardi avenue, baridhara diplomatic enclave, 1212,
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
