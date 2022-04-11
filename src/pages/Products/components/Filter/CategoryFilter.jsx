import { useFilter } from "../../../../hooks/context/filter-context";

const CategoryFilter = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="product-category">
      Category
      <div className="preference">
        <input
          className="category-checkbox"
          id="kindle"
          type="checkbox"
          checked={filterState.category.includes("kindle")}
          onChange={(e) =>
            filterDispatch({
              type: "CATEGORY",
              payload: "kindle",
              isChecked: e.target.checked,
            })
          }
        />
        <label htmlFor="kindle">Kindle Store</label>
      </div>
      <div className="preference">
        <input
          className="category-checkbox"
          id="literature"
          type="checkbox"
          checked={filterState.category.includes("literature & fiction")}
          onChange={(e) =>
            filterDispatch({
              type: "CATEGORY",
              payload: "literature & fiction",
              isChecked: e.target.checked,
            })
          }
        />
        <label htmlFor="literature">Literature & Fiction</label>
      </div>
      <div className="preference">
        <input
          className="category-checkbox"
          id="business"
          type="checkbox"
          checked={filterState.category.includes("business & economics")}
          onChange={(e) =>
            filterDispatch({
              type: "CATEGORY",
              payload: "business & economics",
              isChecked: e.target.checked,
            })
          }
        />
        <label htmlFor="business">Business & Economics</label>
      </div>
      <div className="preference">
        <input
          className="category-checkbox"
          id="spirituality"
          type="checkbox"
          checked={filterState.category.includes("spirituality")}
          onChange={(e) =>
            filterDispatch({
              type: "CATEGORY",
              payload: "spirituality",
              isChecked: e.target.checked,
            })
          }
        />
        <label htmlFor="spirituality">New Age & Spirituality</label>
      </div>
      <div className="preference">
        <input
          className="category-checkbox"
          id="romance"
          type="checkbox"
          checked={filterState.category.includes("romance")}
          onChange={(e) =>
            filterDispatch({
              type: "CATEGORY",
              payload: "romance",
              isChecked: e.target.checked,
            })
          }
        />
        <label htmlFor="romance">Romance</label>
      </div>
    </div>
  );
};

export { CategoryFilter };
