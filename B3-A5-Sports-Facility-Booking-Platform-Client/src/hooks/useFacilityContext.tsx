import { FacilityContext } from "@/providers/FacilityProvider";
import { useContext } from "react";

const useFacilityContext = () => {
  const facilityInfo = useContext(FacilityContext);
  return facilityInfo;
};

export default useFacilityContext;
