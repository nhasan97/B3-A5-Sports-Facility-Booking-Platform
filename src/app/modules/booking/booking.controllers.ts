import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import { sendResponse } from '../../utilities/sendResponse';
import { bookingServices } from './booking.services';
import { calculatePayableAmount } from './booking.utils';
import { facilityModel } from '../facility/facility.model';
import { bookingModel } from './booking.model';
import AppError from '../../errors/AppError';
/*

----------------controller for inserting new booking data in DB----------------*/
const createBooking = catchAsync(async (req, res) => {
  //destructuring necessary properties from body
  const { facility, startTime, endTime } = req.body;

  //checking if the selected facility exists or not. If not throwing an error.
  const loadedFacility = await facilityModel.doesFacilityExist(facility);
  if (!loadedFacility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  //setting pricePerHour
  const pricePerHour = loadedFacility?.pricePerHour || 0;

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
/*

--------------controller for getting all facility data from DB----------------*/
const getAllBookings = catchAsync(async (req, res) => {
  const response = await bookingServices.getAllBookingsFromDB();
  if (response.length) {
    sendResponse(
      res,
      httpStatus.OK,
      true,
      'Bookings retrieved successfully',
      response,
    );
  } else {
    sendResponse(res, httpStatus.NOT_FOUND, false, 'No Data Found', response);
  }
});
/*

--------------controller for getting user specific booking data from DB----------------*/
const getUserBookings = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const response = await bookingServices.getUsersBookingsFromDB(userId);

  if (response.length) {
    sendResponse(
      res,
      httpStatus.OK,
      true,
      'Bookings retrieved successfully',
      response,
    );
  } else {
    sendResponse(res, httpStatus.NOT_FOUND, false, 'No Data Found', response);
  }
});
/*

--------------controller for getting canceling booking data----------------*/
const cancelBooking = catchAsync(async (req, res) => {
  //checking if the booking exists or not. If not throwing an error.
  const booking = await bookingModel.doesBookingExist(req.params.id);
  if (!booking) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');
  }

  //checking if the booking is already canceled or not. If it's been canceled previously throwing an error.
  if (booking && booking.isBooked === 'canceled') {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'This booking has already been canceled',
    );
  }

  //changing booking status to canceled in DB
  const response = await bookingServices.deleteBookingFromDB(req.params.id);

  //sending response
  sendResponse(
    res,
    httpStatus.OK,
    true,
    'Booking cancelled successfully',
    response,
  );
});

//exporting all the controller functions through bookingControllers object
export const bookingControllers = {
  createBooking,
  getAllBookings,
  getUserBookings,
  cancelBooking,
};
