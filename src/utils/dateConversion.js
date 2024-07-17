export const unixToDateInput = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toISOString().split('T')[0];
};

export const dateInputToUnix = (dateString) => {
  const date = new Date(dateString);
  return Math.floor(date.getTime() / 1000);
};
