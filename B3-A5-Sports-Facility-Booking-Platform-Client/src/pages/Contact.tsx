import Container from "@/components/layouts/RootLayout/Container";
import Title from "@/components/shared/Title";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import img from "../assets/images/undraw_Contact_us_re_4qqt-removebg-preview.png";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const title = {
    mainTitle: "Contact Us",
    subTitle: "We would love to hear you",
  };

  return (
    <div className="w-full h-full">
      <Container>
        <Helmet>
          <title>Sport Odyssey | Contact Us</title>
        </Helmet>
        <div className="w-full min-h-screen">
          <Title title={title}></Title>

          <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-6 px-2 py-2 md:px-10 md:py-5">
            <div className="w-full lg:w-1/2 h-full rounded-lg">
              <img src={img} alt="" className="mx-auto" />

              <div className="text-base text-[#757575]">
                <h1 className="">Our</h1>
                <p>
                  <span className="text-[#a5a5a5] font-medium">Email: </span>
                  Sample@gmail.com
                </p>
                <p>
                  <span className="text-[#a5a5a5] font-medium">Cell: </span>
                  +8943465445
                </p>
                <p>
                  <span className="text-[#a5a5a5] font-medium">
                    Office Location:{" "}
                  </span>
                  house# 29, sarwardi avenue, baridhara diplomatic enclave,
                  1212, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-full rounded-lg">
              <form className="w-full flex flex-col gap-4 text-left">
                <Input type="text" placeholder="Name" required className="" />

                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className=""
                />

                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className=""
                />

                <Textarea placeholder="Message" required className=" " />

                <Input
                  type="submit"
                  value="Send"
                  className="w-full hover:bg-transparent bg-red-700 hover:text-red-700 text-[rgba(255,255,255,0.88)] text-lg border hover:border-red-700 border-transparent space-x-2 rounded-lg"
                />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
