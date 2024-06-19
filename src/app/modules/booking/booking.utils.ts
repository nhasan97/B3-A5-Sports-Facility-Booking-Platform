import { calculateTimeDiffInMinutes } from '../../utilities/timeFunctions';
import { TSlot } from './booking.interface';

export const calculatePayableAmount = (
  startTime: string,
  endTime: string,
  pricePerHour: number,
) => {
  const differenceInMinutes: number = calculateTimeDiffInMinutes(
    startTime,
    endTime,
  );
  const pricePerMinute: number = pricePerHour / 60;

  const payableAmount = differenceInMinutes * pricePerMinute;
  return payableAmount;
};

export const timeSlotConflicts = (
  previousBookings: TSlot[],
  newBookingSchedule: TSlot,
) => {
  for (const booking of previousBookings) {
    const previousStartTime = new Date(`1970-01-01T${booking.startTime}:00`);
    const previousEndTime = new Date(`1970-01-01T${booking.endTime}:00`);
    const newStartTime = new Date(
      `1970-01-01T${newBookingSchedule.startTime}:00`,
    );
    const newEndTime = new Date(`1970-01-01T${newBookingSchedule.endTime}:00`);

    if (newStartTime < previousEndTime && newEndTime > previousStartTime) {
      return true;
    }
  }
  return false;
};
