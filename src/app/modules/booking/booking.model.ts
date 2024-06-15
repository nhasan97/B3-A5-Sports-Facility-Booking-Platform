import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

//creating mongoose schema as the first layer of validation for booking data
const bookingSChema = new Schema<TBooking>({
  date: { type: String, required: true, trim: true },
  startTime: { type: String, required: true, trim: true },
  endTime: { type: String, required: true, trim: true },
  user: { type: String, required: true, trim: true },
  facility: { type: String, required: true, trim: true },
  payableAmount: { type: Number, required: true },
  isBooked: {
    type: String,
    required: true,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    default: 'confirmed',
    trim: true,
  },
});

//creating and exporting model for booking
export const bookingModel = model<TBooking>('Booking', bookingSChema);
