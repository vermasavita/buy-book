import { CategoryFilter } from "./Filter/CategoryFilter";
import { PriceRangeFilter } from "./Filter/PriceRange";
import { SortPriceFilter } from "./Filter/SortPrice";
import { RatingFilter } from "./Filter/Rating";
import { useFilter } from "./../../../hooks/context/filter-context";
import "./filter.css";

const Filter = () => {
  const { filterDispatch } = useFilter();
  return (
    <div className="filter">
      <div className="filter-heading">
        <p>Filters</p>
        <button
          className="clear-btn"
          onClick={() => filterDispatch({ type: "RESET", payload: {} })}
        >
          Clear
        </button>
      </div>
      <div>
        <PriceRangeFilter />
        <CategoryFilter />
        <RatingFilter />
        <SortPriceFilter />
      </div>
    </div>
  );
};

export { Filter };
