import "./cart.css";
import { CartItem } from "./components/CartItem";
import { Bill } from "./components/Biil";
import { useCart, useWishlist } from "../../hooks";
import { updateCartQty, removeFromCartHandler } from "../../service";
import { useAuth } from "../../hooks";
import { moveToWishlistHandler, cartBill } from "../../utils";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState } = useAuth();
  const { token } = authState;
  const { cartQuantity, grossPrice, totalPrice } =
    cartBill(cart);

  const callUpdateQtyCart = (_id, actionType) => {
    updateCartQty(_id, token, actionType, cartDispatch);
  };

  const callRemoveFromCartHandler = (_id) => {
    removeFromCartHandler(_id, token, cartDispatch);
  };

  const callMoveToWishlistHandler = (_id) => {
    const item = cart.find((item) => item._id === _id);
    moveToWishlistHandler(
      _id,
      item,
      token,
      wishlistState,
      wishlistDispatch,
      cartDispatch
    );
    removeFromCartHandler(_id, token, cartDispatch);
  };

  return (
    <div className="container">
      {cart.length !== 0 ? (
        <>
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
                      cartRating={cartProduct.rating}
                      cartQuantity={cartProduct.qty}
                      callUpdateQtyCart={callUpdateQtyCart}
                      callRemoveFromCartHandler={callRemoveFromCartHandler}
                      callMoveToWishlistHandler={callMoveToWishlistHandler}
                    />
                  );
                })}
            </div>
            <div className="bill-cart">
              <Bill
                cartQuantity={cartQuantity}
                cartGrossPrice={grossPrice}
                cartTaxAmount={Math.round((grossPrice * 5)/100)}
                cartShipingPrice={40}
                cartTotalPrice={totalPrice}
              />
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="empty-cart-conatiner">
        <h1>Cart is empty</h1>
        <div className="buy-book-btn-container">
        <button className="buy-book-btn">Buy Book Now</button>
        </div>
        </div>   
        </>
      )}
    </div>
  );
};

export { Cart };
