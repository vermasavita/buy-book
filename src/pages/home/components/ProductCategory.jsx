
import { Link } from 'react-router-dom';

const ProductCategory = ({productCategoryImg}) => {
  return (
    <div className="shopping-cart">
      <div className="image-cont">
        <Link to="/products">
          <img
            src={productCategoryImg}
            alt="book-image"
          />
        </Link>
      </div>
    </div>
  );
};

export { ProductCategory };
