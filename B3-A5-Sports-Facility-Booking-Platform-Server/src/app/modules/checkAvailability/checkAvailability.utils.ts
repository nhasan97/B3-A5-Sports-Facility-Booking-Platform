import {
  calculateTimeDiffInMinutes,
  stringToTimeConverter,
} from '../../utilities/timeFunctions';

//function for generating time slots
export const getTimeSlots = (
  stringStartTime: string,
  stringEndTime: string,
) => {
  const slotDurationInMinutes: number = 120;

  //calculating difference between start and end times of given range in minutes
  const diff = calculateTimeDiffInMinutes(stringStartTime, stringEndTime);

  //calculating number of slots
  const numberOfSlots = Math.floor(diff / slotDurationInMinutes);

  //declaring empty array for storing generated slots
  const slots = [];

  //converting string to time format and extracting timestamp
  const startTime = stringToTimeConverter(stringStartTime).getTime();

  /*using for loop to format start and end time for 
  each slot and push it into slots array as object 
  and the loop will iterate numberOfSlot time*/
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStart = new Date(startTime + i * slotDurationInMinutes * 60000);
    const slotEnd = new Date(
      slotStart.getTime() + slotDurationInMinutes * 60000,
    );

    const stringSlotStart = slotStart.toTimeString().slice(0, 5);
    const stringSlotEnd = slotEnd.toTimeString().slice(0, 5);

    slots.push({
      startTime: stringSlotStart,
      endTime: stringSlotEnd,
    });
  }

  return slots;
};
