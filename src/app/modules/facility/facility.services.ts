import { TFacility } from './facility.interface';
import { facilityModel } from './facility.model';
/*

----------------service function for inserting facility data in DB----------------*/
const createFacilityIntoDB = async (facilityData: TFacility) => {
  const response = await facilityModel.create(facilityData);
  return response;
};
/*

----------------service function for updating facility data in DB----------------*/
const updateFacilityIntoDB = async (
  id: string,
  updatedFacilityData: Partial<TFacility>,
) => {
  const response = await facilityModel.findByIdAndUpdate(
    id,
    updatedFacilityData,
    { new: true },
  );
  return response;
};

//service function for fetching specific product data by id from DB
/*

----------------service function for fetching all facility data from DB----------------*/
const getAllFacilitiesFromDB = async () => {
  const response = await facilityModel.find();
  return response;
};

//exporting all the service functions through facilityServices object
export const facilityServices = {
  createFacilityIntoDB,
  updateFacilityIntoDB,
  getAllFacilitiesFromDB,
};
