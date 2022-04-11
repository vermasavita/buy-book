import "./product-listing.css";
import { Filter } from "../Products/components/Filter";
import { Navbar } from "./../../components/navbar/Navbar";
import { Footer } from "./../../components/footer/Footer";
import { ProductCard } from "./components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { sortByPrice } from "../../utils/filter/sort-by-price";
import { priceFilter } from "../../utils/filter/price-filter";
import { ratingFilter } from "../../utils/filter/rating-filter";
import { categoryFilter } from "../../utils/filter/category-filter";
import { useFilter } from "../../hooks/context/filter-context";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

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

  const { filterState } = useFilter();
 const sortPrice = sortByPrice(filterState, products)
  const rating = ratingFilter(filterState, sortPrice);
  const priceRange = priceFilter(filterState, rating);
  const category = categoryFilter(filterState, priceRange);

  return (
    <div className="container">
      <Navbar />
      <div className="product-listing">
        <Filter />
        <div className="grid-container">
          {category.map((product) => (
            <ProductCard
              productId={product._id}
              productImg={product.image}
              productTitle={product.title}
              productAuthor={product.author}
              productPrice={product.price}
              productRating={product.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ProductListing };
