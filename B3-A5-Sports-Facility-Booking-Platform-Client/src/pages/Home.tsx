import Banner from "@/components/Home/Banner";
import ClientReviews from "@/components/Home/ClientsReviews/ClientReviews";
import FeaturedFacilitiesSection from "@/components/Home/FeaturedFacilitiesSection/FeaturedFacilitiesSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sport Odyssey | Home</title>
      </Helmet>

      <Banner></Banner>
      <FeaturedFacilitiesSection />
      <ClientReviews />
    </div>
  );
};

export default Home;
