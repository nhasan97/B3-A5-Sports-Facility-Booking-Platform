import { TFacility } from './facility.interface';
import { facilityModel } from './facility.model';

const createFacilityIntoDB = async (facilityData: TFacility) => {
  const response = await facilityModel.create(facilityData);
  return response;
};

const getAllFacilitiesFromDB = async () => {
  const response = await facilityModel.find();
  return response;
};

export const facilityServices = {
  createFacilityIntoDB,
  getAllFacilitiesFromDB,
};
