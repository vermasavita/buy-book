import './product-listing.css';
import { Filter } from '../Products/components/Filter';
import { ProductCart } from './components/ProductCard';

const ProductListing = () => {

    return (
      <div className="container">
        <Navbar />
        <div className="product-listing">
          <Filter />
          <div className="grid-container">
              <ProductCart
                productImg={"https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"}
                productTitle={"Coffee Can Investing"}
                productAuthor={"Saurabh Mukherjea"}
                productPrice={1000}
                productRating={3}
              />
              <ProductCart
                productImg={"https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"}
                productTitle={"Harry Potter and the Order of the Phoenix"}
                productAuthor={"Saurabh Mukherjea"}
                productPrice={900}
                productRating={2}
              />
              <ProductCart
                productImg={"https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"}
                productTitle={"Coffee Can Investing"}
                productAuthor={"Saurabh Mukherjea"}
                productPrice={550}
                productRating={3}
              />
              <ProductCart
                productImg={"https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"}
                productTitle={"Coffee Can Investing"}
                productAuthor={"Saurabh Mukherjea"}
                productPrice={333}
                productRating={3}
              />
              <ProductCart
                productImg={"https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"}
                productTitle={"Coffee Can Investing"}
                productAuthor={"Saurabh Mukherjea"}
                productPrice={922}
                productRating={3}
              />
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export { ProductListing };
