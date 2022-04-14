import "./cart.css";
import { CartItem } from "./components/CartItem";
import { Bill } from "./components/Biil";
import { Navbar } from "./../../components/navbar/Navbar";
import { Footer } from "./../../components/footer/Footer";
import { useCart } from "../../hooks/context/cart-context";

const Cart = () => {
  const { cartState } = useCart();
  const { cart } = cartState;
  console.log(cart)
 

  return (
    <div className="container">
      <Navbar />
      <div>
        <h1>My Cart</h1>
        {/* <p>Total Item in your cart: 3s</p> */}
      </div>
      <div className="checkout">
        <div className="myCart">
          {cart.length > 0 &&
            cart.map((cartProduct) => {
              return (
                <CartItem
                  key={cartProduct._id}
                  cartId={cartProduct._id}
                  cartImg={cartProduct.image}
                  cartTitle={cartProduct.title}
                  cartPrice={cartProduct.price}
                />
              );
            })}
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
