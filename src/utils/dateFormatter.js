export const unixToDateInput = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toISOString().split('T')[0];
};

export const dateInputToUnix = (dateString) => {
  const date = new Date(dateString);
  return Math.floor(date.getTime() / 1000);
};


export const calculateDaysOverdue = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDifference = currentDate - dueDateObj;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference > 0 ? daysDifference : 0;
};

export function formatDateCardList(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const customFormattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
  return customFormattedDate;
}