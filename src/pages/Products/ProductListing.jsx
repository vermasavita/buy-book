import "./product-listing.css";
import { ProductCard } from "./components/ProductCard";
import { Filter } from './components/Filter';
import { useState, useEffect } from "react";
import { useFilter, useAuth, useCart } from "../../hooks";
import { categoryFilter, priceFilter, ratingFilter, sortByPrice } from "../../utils";
import { addToCart } from "../../service";
import { useNavigate } from "react-router";
import axios from "axios";


const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { filterState } = useFilter();
  const { cartState, cartDispatch} = useCart();
  const { authState} = useAuth();
  const { token } = authState;

  const checkUserAction = (_id) => {
    const hasItemInCart = cartState.cart.find(
      item => item._id === _id
    );
    return hasItemInCart ? "Go to Cart" : "Add to Cart";
  };

  const callAddToCart = (_id) => {
    if (token) {
      const product = products.find((item) => item._id === _id);
      addToCart(product, token, cartDispatch);
    } else {
      navigate("/login");
    }
  };

  const userRouteHandler = (_id) => {
    return checkUserAction(_id) === "Add to Cart"
      ? callAddToCart(_id)
      : navigate("/cart");
  };

  const productApi = "/api/products";

  const loadProductData = async () => {
    try {
      const response = await axios.get(productApi);
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => loadProductData(), []);

  const sortPrice = sortByPrice(filterState, products);
  const rating = ratingFilter(filterState, sortPrice);
  const priceRange = priceFilter(filterState, rating);
  const category = categoryFilter(filterState, priceRange);

  return (
    <div className="container">
      <div className="product-listing">
        <Filter />
        <div className="grid-container">
          {category.map((product) => (
            <ProductCard
            key={product._id}
              productId={product._id}
              productImg={product.image}
              productTitle={product.title}
              productAuthor={product.author}
              productPrice={product.price}
              productRating={product.rating}
              checkUserAction={checkUserAction}
              userRouteHandler={userRouteHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProductListing };
