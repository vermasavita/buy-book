import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    priceRange: 5000,
    category: [],
    rating: "",
    sortBy: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
