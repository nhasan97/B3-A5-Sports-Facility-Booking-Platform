import httpStatus from 'http-status';
import { sendResponse } from '../../utilities/sendResponse';
import { facilityServices } from './facility.services';
import catchAsync from '../../utilities/catchAsync';
/*

----------------controller for inserting new facility data in DB----------------*/
const createFacility = catchAsync(async (req, res, next) => {
  const response = await facilityServices.createFacilityIntoDB(req.body);
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facility added successfully',
    response,
  );
});
/*

--------------controller for updating specific facility info in DB----------------*/
const updateFacility = catchAsync(async (req, res, next) => {
  const response = await facilityServices.updateFacilityIntoDB(
    req.params.id,
    req.body,
  );
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facility updated successfully',
    response,
  );
});
/*

--------------controller for getting all facility data from DB----------------*/
const getAllFacilities = catchAsync(async (req, res, next) => {
  const response = await facilityServices.getAllFacilitiesFromDB();
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facilities retrieved successfully',
    response,
  );
});

//exporting all the controller functions through facilityControllers object
export const facilityControllers = {
  createFacility,
  updateFacility,
  getAllFacilities,
};
