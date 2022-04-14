import "./cart.css";
import { CartItem } from "./components/CartItem";
import { Bill } from "./components/Biil";
import { useCart } from "../../hooks";
import { updateCartQty, removeFromCartHandler} from "../../service";
import { useAuth } from "../../hooks";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { authState } = useAuth();
  const { token } = authState;

  const callUpdateQtyCart = (_id, actionType) => {
    updateCartQty(_id, token, actionType, cartDispatch);
  };

  const callRemoveFromCartHandler = (_id) => {
    removeFromCartHandler(_id, token, cartDispatch);
  }
  
  return (
    <div className="container">
      <div>
        <h1>My Cart</h1>
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
                  cartQuantity={cartProduct.qty}
                  callUpdateQtyCart={callUpdateQtyCart}
                  callRemoveFromCartHandler={callRemoveFromCartHandler}
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
