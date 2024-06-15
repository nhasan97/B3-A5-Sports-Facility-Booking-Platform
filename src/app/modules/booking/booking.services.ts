import { TBooking } from './booking.interface';
import { bookingModel } from './booking.model';
/*

----------------service function for inserting booking data in DB----------------*/
const createBookingIntoDB = async (bookingData: TBooking) => {
  const response = await bookingModel.create(bookingData);
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
    .populate('user')
    .populate('facility');
  return response;
};
/*

----------------service function for deleting specific facility data from DB----------------*/
const deleteBookingFromDB = async (id: string) => {
  const response = await bookingModel.findByIdAndUpdate(
    id,
    { isBooked: 'canceled' },
    { new: true },
  );
  return response;
};

//exporting all the service functions through bookingServices object
export const bookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getUsersBookingsFromDB,
  deleteBookingFromDB,
};
