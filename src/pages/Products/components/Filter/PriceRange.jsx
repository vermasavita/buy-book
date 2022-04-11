import { useFilter } from "../../../../hooks/context/filter-context";
const PriceRangeFilter = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="price-range">
      Price
      <label htmlFor="price-range-ipt" className="price-range-ipt">
        ₹0 - ₹{filterState.priceRange}
      </label>
      <input
        className="price-range-ipt"
        type="range"
        min="0"
        max="5000"
        value={filterState.priceRange}
        onChange={(e) =>
          filterDispatch({ type: "PRICE_RANGE", payload: e.target.value })
        }
      />
    </div>
  );
};

export { PriceRangeFilter };
