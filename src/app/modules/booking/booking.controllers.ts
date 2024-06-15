import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import { sendResponse } from '../../utilities/sendResponse';
import { bookingServices } from './booking.services';
import { calculatePayableAmount } from './booking.utils';
import { facilityModel } from '../facility/facility.model';
import { TFacility } from '../facility/facility.interface';

/*

----------------controller for inserting new booking data in DB----------------*/
const createBooking = catchAsync(async (req, res, next) => {
  //destructuring necessary properties from body
  const { facility, startTime, endTime } = req.body;

  //getting the selected facility and setting pricePerHour
  const loadedFacility = await facilityModel.findOne({ _id: facility });
  const pricePerHour = loadedFacility?.pricePerHour || 0; //need static

  //creating booking data
  const booking = {
    ...req.body,
    user: req.user.id,
    payableAmount: calculatePayableAmount(startTime, endTime, pricePerHour),
  };

  //saving in db
  const response = await bookingServices.createBookingIntoDB(booking);

  //sending response
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Booking created successfully',
    response,
  );
});

//exporting all the controller functions through bookingControllers object
export const bookingControllers = {
  createBooking,
};
