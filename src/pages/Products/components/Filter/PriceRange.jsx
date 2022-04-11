const PriceRangeFilter = () => {
  return (
    <div className="price-range">
      Price
      <label htmlFor="price-range-ipt" className="price-range-ipt">
        ₹0 - ₹5000
      </label>
      <input className="price-range-ipt" type="range" />
    </div>
  );
};

export { PriceRangeFilter };
