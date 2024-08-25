export const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};

export const stringToTimeConverter = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

export const calculateTimeDiffInMinutes = (
  startTime: string,
  endTime: string,
) => {
  const differenceInMinutes =
    (stringToTimeConverter(endTime).getTime() -
      stringToTimeConverter(startTime).getTime()) /
    (1000 * 60);
  return differenceInMinutes;
};
