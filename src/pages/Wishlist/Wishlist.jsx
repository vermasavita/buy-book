import { WishlistCard } from "./component/WishlistCard";
import "./wishlist.css";

const Wishlist = () => {
  return (
    <div className="container">
      <Navbar />
      <div>
        <h1>MyWishlist</h1>
        {/* <p>Total item in your wishlist cart: 4</p> */}
        <div className="grid-container">
          <WishlistCard
            wishlistImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            wishlistTitle={"Coffee Can Investing"}
            wishlistAuthor={"Saurabh Mukherjea"}
            wishlistPrice={500}
            wishlistRating={4}
          />

          <WishlistCard
            wishlistImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            wishlistTitle={"Coffee Can Investing"}
            wishlistAuthor={"Saurabh Mukherjea"}
            wishlistPrice={500}
            wishlistRating={5}
          />

          <WishlistCard
            wishlistImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            wishlistTitle={"Coffee Can Investing"}
            wishlistAuthor={"Saurabh Mukherjea"}
            wishlistPrice={500}
            wishlistRating={2}
          />
          <WishlistCard
            wishlistImg={
              "https://m.media-amazon.com/images/I/81wr8n5+vhL._AC_UY218_.jpg"
            }
            wishlistTitle={"Coffee Can Investing"}
            wishlistAuthor={"Saurabh Mukherjea"}
            wishlistPrice={500}
            wishlistRating={2}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Wishlist };
