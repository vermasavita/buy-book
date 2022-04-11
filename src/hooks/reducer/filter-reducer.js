const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };

    case "RATING":
      return { ...state, rating: action.payload };

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };

    case "CATEGORY":
      return {
        ...state,
        category: action.isChecked
          ? [...state.category, action.payload]
          : state.category.filter((item) => item !== action.payload),
      };

    case "RESET":
      return {
        sortBy: "",
        category: [],
        rating: "",
        priceRange: 5000,
      };

    default:
      return state;
  }
};

export { filterReducer };
