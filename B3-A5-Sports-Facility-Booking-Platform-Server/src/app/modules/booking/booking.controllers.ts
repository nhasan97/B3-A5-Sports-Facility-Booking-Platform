import httpStatus from 'http-status';
import catchAsync from '../../utilities/catchAsync';
import { sendResponse } from '../../utilities/sendResponse';
import { bookingServices } from './booking.services';
/*

----------------controller for inserting new booking data in DB----------------*/
const createBooking = catchAsync(async (req, res) => {
  //Passing data to service function
  const response = await bookingServices.createBookingIntoDB(
    req.body,
    req.user.id,
  );

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
  //receiving data from service function
  const response = await bookingServices.getAllBookingsFromDB();

  //sending response
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
  //Passing id to service function
  const response = await bookingServices.getUsersBookingsFromDB(req.user.id);

  //sending response
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
