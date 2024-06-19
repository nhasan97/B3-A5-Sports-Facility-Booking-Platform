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

export type TSlot = {
  startTime: string;
  endTime: string;
};

export interface BookingModel extends Model<TBooking> {
  doesBookingExist(id: string): Promise<TBooking>;
}
