const ratingFilter = ({ rating }, data) => {
  return data.filter((item) => item.rating >= Number(rating));
};

export { ratingFilter };
