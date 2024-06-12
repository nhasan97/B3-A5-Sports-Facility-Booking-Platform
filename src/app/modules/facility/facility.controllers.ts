import httpStatus from 'http-status';
import { sendResponse } from '../../utilities/sendResponse';
import { facilityServices } from './facility.services';
import catchAsync from '../../utilities/catchAsync';

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

export const facilityControllers = {
  createFacility,
  getAllFacilities,
};
