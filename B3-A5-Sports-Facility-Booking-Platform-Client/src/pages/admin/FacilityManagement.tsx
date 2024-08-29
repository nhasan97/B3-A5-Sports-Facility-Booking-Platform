import Browser from "@/components/FacilityListingPage/Browser";
import AddFacilityModal from "@/components/FacilityManagement/AddFacilityModal";
import MobileView from "@/components/FacilityManagement/MobileView/MobileView";
import TabPCView from "@/components/FacilityManagement/TabPCView/TabPCView";
import DashboardContainer from "@/components/layouts/dashboardLayout/DashboardContainer";
import Title from "@/components/shared/Title";
import useFacilityContext from "@/hooks/useFacilityContext";
import { TFacilityContext } from "@/types/facility.type";

import { Helmet } from "react-helmet-async";

const FacilityManagement = () => {
  const {
    loadingFacilities,
    facilities,
    setItemsPerPage,
    loadingNumberOfFacilities,
    numberOfFacilities,
  } = useFacilityContext() as TFacilityContext;

  // useEffect(() => {
  setItemsPerPage(numberOfFacilities);
  // }, [numberOfProducts, setItemsPerPage]);

  return (
    <div className="h-screen">
      <DashboardContainer>
        <Helmet>
          <title>Sport Odyssey | Dashboard | Facilities</title>
        </Helmet>

        <Title title={{ mainTitle: "Facilities" }}></Title>

        {/* browser */}
        <Browser pagination={false}></Browser>

        <div className="w-full flex justify-between items-center">
          <AddFacilityModal></AddFacilityModal>
        </div>

        {/*tab pc view */}
        <TabPCView
          loadingFacilities={loadingFacilities}
          facilities={facilities}
          loadingNumberOfFacilities={loadingNumberOfFacilities}
        />

        {/* mobile view */}
        <MobileView
          loadingFacilities={loadingFacilities}
          facilities={facilities}
          loadingNumberOfFacilities={loadingNumberOfFacilities}
        />
      </DashboardContainer>
    </div>
  );
};

export default FacilityManagement;
