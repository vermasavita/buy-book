import { useFilter } from "../../../../hooks";

const RatingFilter = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="rating">
      Rating
      <div className="preference">
        <input
          className="rating-radio"
          type="radio"
          value={4}
          checked={filterState.rating === "4"}
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        />
        <label htmlFor="four-star">4 stars & above</label>
      </div>
      <div className="preference">
        <input
          className="rating-radio"
          type="radio"
          value={3}
          checked={filterState.rating === "3"}
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        />
        <label htmlFor="three-star">3 stars & above</label>
      </div>
      <div className="preference">
        <input
          className="rating-radio"
          type="radio"
          value={2}
          checked={filterState.rating === "2"}
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        />
        <label htmlFor="two-star">2 stars & above</label>
      </div>
      <div className="preference">
        <input
          className="rating-radio"
          type="radio"
          value={1}
          checked={filterState.rating === "1"}
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        />
        <label htmlFor="one-star">1 stars & above</label>
      </div>
    </div>
  );
};

export { RatingFilter };
