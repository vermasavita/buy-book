import "./wishlist.css";
import { useEffect } from "react";
import { WishlistCard } from "./component/WishlistCard";
import { getWishlistItem, removeFromWishlist} from "../../service";
import { useAuth, useWishlist } from "../../hooks";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { authState } = useAuth();
  const { token } = authState;
  console.log(wishlist)

  const callRemoveWishlistHandler = (_id) => {
    removeFromWishlist(_id, token, wishlistDispatch)
  }

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
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export { Wishlist };
