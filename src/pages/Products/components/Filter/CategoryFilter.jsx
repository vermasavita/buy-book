const CategoryFilter = () => {
  return (
    <div className="product-category">
      Category
      <div className="preference">
        <input className="category-checkbox" id="kindle" type="checkbox" />
        <label htmlFor="kindle">Kindle Store</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="literature" type="checkbox" />
        <label htmlFor="literature">Literature & Fiction</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="business" type="checkbox" />
        <label htmlFor="business">Business & Economics</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="spirituality" type="checkbox" />
        <label htmlFor="spirituality">New Age & Spirituality</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="romance" type="checkbox" />
        <label htmlFor="romance">Romance</label>
      </div>
    </div>
  );
};

export { CategoryFilter };
