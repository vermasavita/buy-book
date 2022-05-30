import "./product-listing.css";
import { ProductCard } from "./components/ProductCard";
import { Filter } from "./components/Filter";
import { useState, useEffect } from "react";
import { useFilter, useAuth, useCart, useWishlist } from "../../hooks";
import {
  categoryFilter,
  priceFilter,
  ratingFilter,
  sortByPrice,
} from "../../utils";
import { addToCart, addToWishlist, removeFromWishlist } from "../../service";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [productLoader, setProductLoader] = useState(false);
  const navigate = useNavigate();
  const { filterState } = useFilter();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState } = useAuth();
  const { token } = authState;

  // cart functions

  const checkUserAction = (_id) => {
    const hasItemInCart = cartState.cart.find((item) => item._id === _id);
    return hasItemInCart ? "Go to Cart" : "Add to Cart";
  };

  const callAddToCart = (_id) => {
    if (token) {
      const product = products.find((item) => item._id === _id);
      addToCart(product, token, cartDispatch);
    } else {
      navigate("/login");
      toast.warning("You are not logged in");
    }
  };

  const userRouteHandler = (_id) => {
    return checkUserAction(_id) === "Add to Cart"
      ? callAddToCart(_id)
      : navigate("/cart");
  };
  // --------------------------------------
  //wishlist functions

  const wishlistActionHandler = (_id) => {
    const hasItemInWishlist = wishlistState.wishlist.find(
      (product) => product._id === _id
    );
    return hasItemInWishlist ? "remove" : "add";
  };

  const callAddToWishlist = (_id) => {
    if (token) {
      const product = products.find((item) => item._id === _id);
      addToWishlist(product, token, wishlistDispatch);
    } else {
      navigate("/login");
    }
  };

  const checkWishlistActionHandler = (_id) => {
    return wishlistActionHandler(_id) === "remove"
      ? removeFromWishlist(_id, token, wishlistDispatch)
      : callAddToWishlist(_id);
  };
  // ----------------------------------------

  const productApi = "/api/products";

  const loadProductData = async () => {
    try {
      setProductLoader(true);
      const response = await axios.get(productApi);
      if (response.status === 200) {
        setProducts(response.data.products);
        setProductLoader(false);
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
        {productLoader ? (
          <h1>Loading...</h1>
        ) : category.length > 0 ? (
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
                wishlistActionHandler={wishlistActionHandler}
                checkWishlistActionHandler={checkWishlistActionHandler}
              />
            ))}
          </div>
        ) : (
          <div className="no-data-error">No product found</div>
        )}
      </div>
    </div>
  );
};

export { ProductListing };
