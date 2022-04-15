import { Link } from "react-router-dom";
import { CategoryFilter } from "./Filter/CategoryFilter";
import { PriceRangeFilter } from "./Filter/PriceRange";
import { SortPriceFilter } from "./Filter/SortPrice";
import { RatingFilter } from "./Filter/Rating";
import { useFilter } from "../../../hooks";
import "./filter.css";

const Filter = () => {
  const { filterDispatch } = useFilter();
  return (
    <div className="filter">
      <div className="filter-heading">
        <p className="filter-name">Filters</p>
        <Link to=""
          className="clear-btn"
          onClick={() => filterDispatch({ type: "RESET", payload: {} })}
        >
          Clear
        </Link>
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
