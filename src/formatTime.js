export const formatTime = (time) => {
  const getSeconds = time % 60;
  const getMinutes = Math.floor((time % 3600) / 60);
  const getHours = Math.floor(time / 3600);

  return `${getHours.toString().padStart(2, '0')} : ${getMinutes
    .toString()
    .padStart(2, '0')} : ${getSeconds.toString().padStart(2, '0')}`;
};
