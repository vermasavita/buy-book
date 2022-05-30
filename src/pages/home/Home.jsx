import { ProductCategory } from "./components/ProductCategory";
import './home.css'
import './../Cart/cart.css'

const Home = () => {
  return (
    <div className="container">
      <div className="hero-banner-container">
        <img
          src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/70_inr.jpg"
          alt="hero-banner"
        />
      </div>
      <div className="product-feature-category">
          <ProductCategory productCategoryImg={"https://d2g9wbak88g7ch.cloudfront.net/promotionimages/2_discountoffer.jpg"} />
          <ProductCategory productCategoryImg={"https://d2g9wbak88g7ch.cloudfront.net/promotionimages/8_bigdiscount.jpg"}/>
          <ProductCategory productCategoryImg={"https://d2g9wbak88g7ch.cloudfront.net/promotionimages/5_preorders.jpg"}/>
          <ProductCategory productCategoryImg={"https://d2g9wbak88g7ch.cloudfront.net/promotionimages/3_newoffer.jpg"}/>
      </div>
    </div>
  );
};

export { Home };
