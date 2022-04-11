const sortByPrice = ({ sortBy }, data) => {
  if (sortBy === "LOW_TO_HIGH") {
    return [...data.sort((a, b) => Number(a.price) - Number(b.price))];
  } else if (sortBy === "HIGH_TO_LOW") {
    return [...data.sort((a, b) => Number(b.price) - Number(a.price))];
  } else {
    return data;
  }
};

export { sortByPrice };
