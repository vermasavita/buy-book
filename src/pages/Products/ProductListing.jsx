import "./product-listing.css";
import { Filter } from "../Products/components/Filter";
import { Navbar } from "./../../components/navbar/Navbar";
import { Footer } from "./../../components/footer/Footer";
import { ProductCard } from "./components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

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
  return (
    <div className="container">
      <Navbar />
      <div className="product-listing">
        <Filter />
        <div className="grid-container">
          {products.map((product) => (
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
