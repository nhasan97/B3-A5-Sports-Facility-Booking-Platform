import { TBooking } from './booking.interface';
import { bookingModel } from './booking.model';
/*

----------------service function for inserting booking data in DB----------------*/
const createBookingIntoDB = async (bookingData: TBooking) => {
  const response = await bookingModel.create(bookingData);
  return response;
};

//exporting all the service functions through bookingServices object
export const bookingServices = {
  createBookingIntoDB,
};
