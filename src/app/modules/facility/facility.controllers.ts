import httpStatus from 'http-status';
import { sendResponse } from '../../utilities/sendResponse';
import { facilityServices } from './facility.services';
import catchAsync from '../../utilities/catchAsync';
import { facilityModel } from './facility.model';
import AppError from '../../errors/AppError';
/*

----------------controller for inserting new facility data in DB----------------*/
const createFacility = catchAsync(async (req, res) => {
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
const updateFacility = catchAsync(async (req, res) => {
  //checking if the selected facility exists or not. If not throwing an error.
  const loadedFacility = await facilityModel.doesFacilityExist(req.params.id);
  if (!loadedFacility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  //Passing data to service function
  const response = await facilityServices.updateFacilityIntoDB(
    req.params.id,
    req.body,
  );

  //sending response
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facility updated successfully',
    response,
  );
});
/*

--------------controller for updating specific facility info in DB----------------*/
const deleteFacility = catchAsync(async (req, res) => {
  //checking if the selected facility exists or not. If not throwing an error.
  const loadedFacility = await facilityModel.doesFacilityExist(req.params.id);
  if (!loadedFacility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  //deleting facility from db
  const response = await facilityServices.deleteFacilityFromDB(req.params.id);

  //sending response
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facility deleted successfully',
    response,
  );
});
/*

--------------controller for getting all facility data from DB----------------*/
const getAllFacilities = catchAsync(async (req, res) => {
  const response = await facilityServices.getAllFacilitiesFromDB();
  if (response.length) {
    sendResponse(
      res,
      httpStatus.OK,
      true,
      'Facilities retrieved successfully',
      response,
    );
  } else {
    sendResponse(res, httpStatus.NOT_FOUND, false, 'No Data Found', response);
  }
});

//exporting all the controller functions through facilityControllers object
export const facilityControllers = {
  createFacility,
  updateFacility,
  deleteFacility,
  getAllFacilities,
};
