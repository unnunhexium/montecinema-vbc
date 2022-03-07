export const imageAlt = (title) => {
  return `An image from ${title} film.`;
};

export const getFormattedLength = (length) => {
  const minutes = `0${length % 60}`.slice(-2);
  const hours = (length - minutes) / 60;
  return `${hours}h ${minutes}min`;
};
