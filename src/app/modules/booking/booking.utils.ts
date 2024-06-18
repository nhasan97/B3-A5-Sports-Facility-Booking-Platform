import { calculateTimeDiffInMinutes } from '../../utilities/timeFunctions';

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
