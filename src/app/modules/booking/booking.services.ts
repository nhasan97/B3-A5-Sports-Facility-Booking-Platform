import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { facilityModel } from '../facility/facility.model';
import { TBooking } from './booking.interface';
import { bookingModel } from './booking.model';
import { calculatePayableAmount, timeSlotConflicts } from './booking.utils';
/*

----------------service function for inserting booking data in DB----------------*/
const createBookingIntoDB = async (bookingData: TBooking, userId: string) => {
  //destructuring necessary properties from body
  const { facility, date, startTime, endTime } = bookingData;

  //checking if the selected facility exists or not. If not throwing an error.
  const loadedFacility = await facilityModel.doesFacilityExist(facility);
  if (!loadedFacility) {
    throw new AppError(httpStatus.NOT_FOUND, 'Facility not found');
  }

  //retrieving bookings on same day for the selected facility
  const previousBookings = await bookingModel.find(
    {
      facility: facility,
      date: date,
    },
    { _id: 0, startTime: 1, endTime: 1 },
  );

  //creating new time object
  const newBookingSchedule = {
    startTime,
    endTime,
  };

  //checking if there is any time slot conflict
  if (timeSlotConflicts(previousBookings, newBookingSchedule)) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This slot is already booked. Please choose another slot.',
    );
  }

  //setting pricePerHour
  const pricePerHour = loadedFacility?.pricePerHour || 0;

  //creating booking data
  const booking = {
    ...bookingData,
    user: userId,
    payableAmount: calculatePayableAmount(startTime, endTime, pricePerHour),
  };

  //saving in db
  const response = await bookingModel.create(booking);

  //returning result of create operation
  return response;
};
/*


----------------service function for fetching all booking data from DB----------------*/
const getAllBookingsFromDB = async () => {
  const response = await bookingModel
    .find()
    .populate('user')
    .populate('facility');
  return response;
};
/*


----------------service function for fetching user specific booking data from DB----------------*/
const getUsersBookingsFromDB = async (userId: string) => {
  const response = await bookingModel
    .find({ user: userId })
    // .populate('user')
    .populate('facility');
  return response;
};
/*


----------------service function for deleting specific facility data from DB----------------*/
const deleteBookingFromDB = async (id: string) => {
  //checking if the booking exists or not. If not throwing an error.
  const booking = await bookingModel.doesBookingExist(id);
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

  //updating isBooked status in DB
  const response = await bookingModel
    .findByIdAndUpdate(id, { isBooked: 'canceled' }, { new: true })
    .populate('facility');

  //returning result of findByIdAndUpdate query
  return response;
};

//exporting all the service functions through bookingServices object
export const bookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getUsersBookingsFromDB,
  deleteBookingFromDB,
};
