const stringToTimeConverter = (timeString: string) => {
  let [hours, minutes] = timeString.split(':').map(Number);
  let date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const calculateTimeDiffInMinutes = (startTime: string, endTime: string) => {
  const differenceInMinutes =
    (stringToTimeConverter(endTime).getTime() -
      stringToTimeConverter(startTime).getTime()) /
    (1000 * 60);
  return differenceInMinutes;
};

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
