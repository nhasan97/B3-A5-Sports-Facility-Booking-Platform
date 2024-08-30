import Banner from "@/components/Home/Banner/Banner";
import ClientReviews from "@/components/Home/ClientsReviews/ClientReviews";
import FeaturedFacilitiesSection from "@/components/Home/FeaturedFacilitiesSection/FeaturedFacilitiesSection";
import HowDoesItWorkSection from "@/components/Home/HowDoesItWorkSection/HowDoesItWorkSection";
import WhyUsSection from "@/components/Home/WhyUsSection/WhyUsSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sport Odyssey | Home</title>
      </Helmet>

      <Banner></Banner>
      <FeaturedFacilitiesSection />
      <WhyUsSection />
      <HowDoesItWorkSection />
      <ClientReviews />
    </div>
  );
};

export default Home;
