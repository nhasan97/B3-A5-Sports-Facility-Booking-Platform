import { bookingModel } from '../booking/booking.model';
import { getTimeSlots } from './checkAvailability.utils';

const checkAvailabilityInDB = async (date: string) => {
  //getting all slots for a day
  const timeSlotsOfADay = getTimeSlots('09:00', '17:00');

  //retrieving booked slots from DB
  const bookedSlots = await bookingModel.find(
    { date: date },
    { _id: 0, startTime: 1, endTime: 1 },
  );

  //declaring empty array for storing available slots
  const availableTimeSlots = [];

  for (let i = 0; i < bookedSlots.length; i++) {
    for (let j = 0; j < timeSlotsOfADay.length; j++) {
      if (
        bookedSlots[i].startTime !== timeSlotsOfADay[j].startTime &&
        bookedSlots[i].endTime !== timeSlotsOfADay[j].endTime
      ) {
        availableTimeSlots.push(timeSlotsOfADay[j]);
      }
    }
  }

  return availableTimeSlots;
};

export const checkAvailabilityServices = {
  checkAvailabilityInDB,
};
