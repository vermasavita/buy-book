const CartItem = ({ cartId, cartImg, cartTitle, cartPrice }) => {
  return (
    <div className="shopping-cart" key={cartId}>
      <div className="image">
        <img src={cartImg} alt="book-image" />
      </div>

      <div className="content">
        <h2>{cartTitle}</h2>
        <h4>
          ₹{cartPrice}
          <strike>₹{cartPrice * 2}</strike>
        </h4>

        <div className="qty">
          <button>
            <i className="bx bx-minus"></i>
          </button>
          <p>1 </p>
          <button>
            <i className="bx bx-plus"></i>
          </button>
        </div>

        <button className="cart-btn">Remove</button>

        <button className="cart-btn">Add to Wishlist</button>
      </div>
    </div>
  );
};

export { CartItem };
