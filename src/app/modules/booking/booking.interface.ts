//declaring type for booking

export type TBooking = {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
};
