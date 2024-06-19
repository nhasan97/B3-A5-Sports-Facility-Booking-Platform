import { Model } from 'mongoose';

//declaring type for booking
export interface TBooking {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
}

//declaring type for time slot
export type TSlot = {
  startTime: string;
  endTime: string;
};

//declaring type definition for doesBookingExist static function
export interface BookingModel extends Model<TBooking> {
  doesBookingExist(id: string): Promise<TBooking>;
}
