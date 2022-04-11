const CartItem = ({ cartImg, cartTitle, cartPrice }) => {
  return (
    <div className="shopping-cart">
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
            <i class="bx bx-minus"></i>
          </button>
          <p>1 </p>
          <button>
            <i class="bx bx-plus"></i>
          </button>
        </div>

        <button className="cart-btn">Remove</button>

        <button className="cart-btn">Add to Wishlist</button>
      </div>
    </div>
  );
};

export { CartItem };
