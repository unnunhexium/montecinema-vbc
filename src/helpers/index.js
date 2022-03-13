export const imageAlt = (title) => {
  return `An image from ${title} film.`;
};

export const getFormattedLength = (length) => {
  const minutes = `0${length % 60}`.slice(-2);
  const hours = (length - minutes) / 60;
  return `${hours}h ${minutes}min`;
};

export const getYear = (string) => {
  return string.slice(0, 4);
};

export const getDayOfWeek = (date = new Date()) => {
  const dayOfWeek = new Date(date).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayOfWeek];
};

export const getDate = (date = new Date()) => {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  const mm = `0${today.getMonth() + 1}`.slice(-2);
  const dd = `0${today.getDate()}`.slice(-2);
  return `${dd}/${mm}/${yyyy}`;
};
