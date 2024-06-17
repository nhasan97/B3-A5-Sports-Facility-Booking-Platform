import { Schema, model } from 'mongoose';
import { BookingModel, TBooking } from './booking.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

//creating mongoose schema as the first layer of validation for booking data
const bookingSChema = new Schema<TBooking, BookingModel>({
  date: { type: String, required: true, trim: true },
  startTime: { type: String, required: true, trim: true },
  endTime: { type: String, required: true, trim: true },
  user: { type: String, ref: 'User', required: true, trim: true },
  facility: { type: String, ref: 'Facility', required: true, trim: true },
  payableAmount: { type: Number, required: true },
  isBooked: {
    type: String,
    required: true,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    default: 'confirmed',
    trim: true,
  },
});

//using document middleware for checking if the document already exists or not
bookingSChema.pre('save', async function (next) {
  const doesExist = await bookingModel.findOne({
    date: this.date,
    startTime: this.startTime,
    endTime: this.endTime,
    user: this.user,
    facility: this.facility,
    payableAmount: this.payableAmount,
    isBooked: this.isBooked,
  });
  if (doesExist) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'This booking has already been made!',
    );
  }
  next();
});

//checking if the booking exists or not using static method
bookingSChema.statics.doesBookingExist = async function (id: string) {
  return await bookingModel.findById(id);
};

//creating and exporting model for booking
export const bookingModel = model<TBooking, BookingModel>(
  'Booking',
  bookingSChema,
);
