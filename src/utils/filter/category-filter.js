const categoryFilter = ({ category }, data) => {
  return category.length > 0
    ? data.filter((item) => category.includes(item.categoryName.toLowerCase()))
    : data;
};

export { categoryFilter };
