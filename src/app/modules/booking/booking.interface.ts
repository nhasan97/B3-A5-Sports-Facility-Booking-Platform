//declaring type for booking

import { Model } from 'mongoose';

export interface TBooking {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
}

export interface BookingModel extends Model<TBooking> {
  doesBookingExist(id: string): Promise<TBooking>;
}
