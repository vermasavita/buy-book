import "./wishlist.css";
import { useEffect } from "react";
import { WishlistCard } from "./component/WishlistCard";
import { getWishlistItem, removeFromWishlist } from "../../service";
import { useAuth, useCart, useWishlist } from "../../hooks";
import { moveToCartHandler } from "../../utils";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { wishlist } = wishlistState;
  const { authState } = useAuth();
  const { token } = authState;

  const callRemoveWishlistHandler = (_id) => {
    removeFromWishlist(_id, token, wishlistDispatch);
  };

  const callMoveToCartHandler = (_id) => {
    const item = wishlist.find(item => item._id === _id);
    moveToCartHandler(_id, item, token, cartState, cartDispatch);
    removeFromWishlist(_id, token, wishlistDispatch);
  };

  useEffect(() => getWishlistItem(token, wishlistDispatch), []);

  return (
    <div className="container">
      <div>
        <h1>MyWishlist</h1>
        <div className="grid-container">
          {wishlist.length > 0 &&
            wishlist.map((wishlistProduct) => (
              <WishlistCard
                key={wishlistProduct._id}
                wishlistId={wishlistProduct._id}
                wishlistImg={wishlistProduct.image}
                wishlistTitle={wishlistProduct.title}
                wishlistAuthor={wishlistProduct.author}
                wishlistPrice={wishlistProduct.price}
                wishlistRating={wishlistProduct.rating}
                callRemoveWishlistHandler={callRemoveWishlistHandler}
                callMoveToCartHandler={callMoveToCartHandler}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export { Wishlist };
