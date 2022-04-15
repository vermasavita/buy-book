const CartItem = ({
  cartId,
  cartImg,
  cartTitle,
  cartPrice,
  cartQuantity,
  callUpdateQtyCart,
  callRemoveFromCartHandler,
  // callMoveToWishlistHandler
}) => {
  return (
    <div className="shopping-cart" key={cartId}>
      <div className="image">
        <img src={cartImg} alt="book-image" />
      </div>

      <div className="content">
        <h2>{cartTitle}</h2>
        <h4>₹ {cartPrice * cartQuantity}</h4>
        <div className="qty">
          <button
            onClick={() =>
              cartQuantity <= 1
                ? callRemoveFromCartHandler(cartId)
                : callUpdateQtyCart(cartId, "decrement")
            }
          >
            <i
              className={`bx ${cartQuantity === 1 ? "bx-trash" : "bx-minus"}`}
            ></i>
          </button>
          <p>{cartQuantity}</p>
          <button onClick={() => callUpdateQtyCart(cartId, "increment")}>
            <i className="bx bx-plus"></i>
          </button>
        </div>

        <button
          className="cart-btn"
          onClick={() => callRemoveFromCartHandler(cartId)}
        >
          Remove
        </button>

        <button className="cart-btn" >Add to Wishlist</button>
      </div>
    </div>
  );
};

export { CartItem };
// onClick={callMoveToWishlistHandler(cartId)}
