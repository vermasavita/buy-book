import "./cart.css";
import { CartItem } from "./components/CartItem";
import { Bill } from "./components/Biil";
import { useCart } from "../../hooks";

const Cart = () => {
  const { cartState } = useCart();
  const { cart } = cartState;
 

  return (
    <div className="container">
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
    </div>
  );
};

export { Cart };
