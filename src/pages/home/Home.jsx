import { ProductCategory } from "./components/ProductCategory";
import './home.css'
import './../Cart/cart.css'
import { Navbar} from './../../components/navbar/Navbar';
import {Footer} from './../../components/footer/Footer';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-banner-container">
        <img
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/02/01/Gateway_Billboard-C_OMP.jpg"
          alt="hero-banner"
        />
      </div>
      <div className="grid-continer product-category">
          <ProductCategory productCategoryImg={"https://media.istockphoto.com/photos/bewitched-book-with-magic-glows-in-the-darkness-picture-id516450790?b=1&k=20&m=516450790&s=170667a&w=0&h=V7GrN7skD6pe-CHQZG2Mz0vqKy9X3TFaZF7-y8pFDRw="} />
          <ProductCategory productCategoryImg={"https://media.istockphoto.com/photos/book-on-wooden-deck-with-glowing-graph-illustrations-picture-id1087508446?b=1&k=20&m=1087508446&s=170667a&w=0&h=czJlvfJgbiQCkthNEPbWKCJBpPJ8GZ-Xm8tDmdg1Hys="}/>
          <ProductCategory productCategoryImg={"https://media.istockphoto.com/photos/heart-book-page-vintage-effect-style-pictures-picture-id503130452?b=1&k=20&m=503130452&s=170667a&w=0&h=esjZFj1zLl4zGvVDTA-hnmBjVRolj1PcZNu6cn8xLSE="}/>
          <ProductCategory productCategoryImg={"https://media.istockphoto.com/photos/plays-of-shakespeare-picture-id184986309?b=1&k=20&m=184986309&s=170667a&w=0&h=qxAf7tksVx3TZC2KgXhA6_3BbwjXvnuWiak2hWqVLaI="}/>
      </div>
      <Footer/>
    </div>
  );
};

export { Home };
