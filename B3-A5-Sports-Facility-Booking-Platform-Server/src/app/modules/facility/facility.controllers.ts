import httpStatus from 'http-status';
import { sendResponse } from '../../utilities/sendResponse';
import { facilityServices } from './facility.services';
import catchAsync from '../../utilities/catchAsync';
/*

----------------controller for inserting new facility data in DB----------------*/
const createFacility = catchAsync(async (req, res) => {
  //Passing data to service function
  const response = await facilityServices.createFacilityIntoDB(req.body);

  //sending response
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
  //Passing id to service function
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
  //receiving data from service function
  const response = await facilityServices.getAllFacilitiesFromDB(req?.query);

  //sending response
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
/*

--------------controller for getting specific facility from DB----------------*/
const getSingleFacility = catchAsync(async (req, res) => {
  //Passing id to service function
  const response = await facilityServices.getSingleFacilityFromDB(
    req.params.id,
  );

  //sending response
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facility fetched successfully',
    response,
  );
});
/*

--------------controller for getting total facility count from DB----------------*/
const getFacilityCount = catchAsync(async (req, res) => {
  const response = await facilityServices.getFacilityCountFromDB();

  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Facilities fetched successfully!',
    response,
  );
});

//exporting all the controller functions through facilityControllers object
export const facilityControllers = {
  createFacility,
  updateFacility,
  deleteFacility,
  getAllFacilities,
  getSingleFacility,
  getFacilityCount,
};
