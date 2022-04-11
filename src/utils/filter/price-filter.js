const priceFilter = ({ priceRange }, data) => {
  return data.filter((item) => Number(item.price) <= Number(priceRange));
};

export { priceFilter };
