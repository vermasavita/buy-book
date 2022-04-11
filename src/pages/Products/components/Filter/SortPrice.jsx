import { useFilter } from "../../../../hooks/context/filter-context";

const SortPriceFilter = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="price-sort">
      Sort by
      <div className="preference">
        <input
          className="pricehl"
          type="radio"
          name="sort"
          checked={filterState.sortBy === "LOW_TO_HIGH"}
          onChange={(e) => filterDispatch({ type: "LOW_TO_HIGH" })}
        />
        <label htmlFor="rating-radio">Price - Low to High</label>
      </div>
      <div className="preference">
        <input
          className="pricehl"
          type="radio"
          name="sort"
          checked={filterState.sortBy === "HIGH_TO_LOW"}
          onChange={(e) => filterDispatch({ type: "HIGH_TO_LOW" })}
        />
        <label htmlFor="rating-radio">Price - High to Low</label>
      </div>
    </div>
  );
};

export { SortPriceFilter };
