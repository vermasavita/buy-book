import { CategoryFilter } from "./Filter/CategoryFilter";
import { PriceRangeFilter } from "./Filter/PriceRange";
import { SortPriceFilter } from "./Filter/SortPrice";
import { RatingFilter } from "./Filter/Rating";
import './filter.css';

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-heading">
        <p>Filters</p>
        <button className="clear-btn">Clear</button>
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