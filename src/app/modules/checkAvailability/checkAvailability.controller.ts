import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import { sendResponse } from '../../utilities/sendResponse';
import { checkAvailabilityServices } from './checkAvailability.service';
import { getCurrentDate } from '../../utilities/dateFunctions';
/*

--------------controller for getting booking data based on searched date from DB----------------*/
const checkAvailability = catchAsync(async (req, res) => {
  const date = req.query.date || getCurrentDate();
  const response = await checkAvailabilityServices.checkAvailabilityInDB(
    date as string,
  );
  if (response.length) {
    sendResponse(
      res,
      httpStatus.OK,
      true,
      'Availability checked successfully',
      response,
    );
  } else {
    sendResponse(res, httpStatus.NOT_FOUND, false, 'No Data Found', response);
  }
});

//exporting all the controller functions through checkAvailabilityControllers object
export const checkAvailabilityControllers = {
  checkAvailability,
};
