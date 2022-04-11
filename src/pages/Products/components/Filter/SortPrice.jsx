const SortPriceFilter = () => {
  return (
    <div className="price-sort">
      Sort by
      <div className="preference">
        <input className="pricehl" type="radio" name="sort" />
        <label htmlFor="rating-radio">Price - Low to High</label>
      </div>
      <div className="preference">
        <input className="pricehl" type="radio" name="sort" />
        <label htmlFor="rating-radio">Price - High to Low</label>
      </div>
    </div>
  );
};

export { SortPriceFilter };
