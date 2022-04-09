import { Navbar } from "./../../components/navbar/Navbar";
import { Footer } from "./../../components/footer/Footer";
import { CartItem } from "./components/CartItem";
import { Bill } from "./components/Biil";
import "./cart.css";

const Cart = () => {
  return (
    <div className="container">
      <Navbar />
      <div>
        <h1>My Cart</h1>
        <p>Total Item in your cart: 3s</p>
      </div>
      <div className="checkout">
        <div className="myCart">
          <CartItem
            cartImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            cartTitle={"Coffee Can Investing"}
            cartPrice={1000}
          />
          <CartItem
            cartImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            cartTitle={"Coffee Can Investing"}
            cartPrice={1000}
          />
          <CartItem
            cartImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            cartTitle={"Coffee Can Investing"}
            cartPrice={1000}
          />
        </div>
        <div className="bill-cart">
          <Bill />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Cart };
