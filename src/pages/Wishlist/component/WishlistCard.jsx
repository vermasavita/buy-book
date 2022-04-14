const WishlistCard = ({
  wishlistId,
  wishlistImg,
  wishlistTitle,
  wishlistAuthor,
  wishlistPrice,
  wishlistRating,
  callRemoveWishlistHandler,
}) => {
  return (
    <div className="cart" key={wishlistId}>
      <div className="img-container">
        <img src={wishlistImg} alt="boom-image" />
        <ul className="product-action-icon">
          <li onClick={() => callRemoveWishlistHandler(wishlistId)}>
            <i
              className='bx bxs-heart'
              aria-hidden="true"
            />
          </li>
        </ul>
      </div>

      <div className="product-content">
        <div className="product-name">
          <h3>{wishlistTitle}</h3>
          <p>{wishlistAuthor}</p>
        </div>

        <div className="product-price">
          <h2>₹{wishlistPrice}</h2>
        </div>
      </div>

      <div className="add-to-cart">
        <a href="">Move to Cart</a>
      </div>
    </div>
  );
};

export { WishlistCard };
