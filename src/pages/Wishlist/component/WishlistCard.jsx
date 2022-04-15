const WishlistCard = ({
  wishlistId,
  wishlistImg,
  wishlistTitle,
  wishlistAuthor,
  wishlistPrice,
  wishlistRating,
  callRemoveWishlistHandler,
  callMoveToCartHandler
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
          <div className="product-rating">
            <p className="p-rating">{wishlistRating} <i class='bx bxs-star'></i></p>
          </div>
        </div>
      </div>

      <button className="add-to-cart" onClick={() => callMoveToCartHandler(wishlistId)} >
        Move to Cart
      </button>
    </div>
  );
};

export { WishlistCard };
// 
