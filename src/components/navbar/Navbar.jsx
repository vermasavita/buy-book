import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";
import { useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "../../hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const { authState, authDispatch } = useAuth();
  const { cart } = cartState;
  const { wishlist } = wishlistState;

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const cartRouteHandler = () => {
    authState.token ? navigate("/cart") : navigate("/login");
  };

  const wishlistRouteHandler = () => {
    authState.token ? navigate("/wishlist") : navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">
          ByBook
        </Link>
      </div>

      <div className="search-container">
        <form action="">
          <input id="search" type="search" placeholder="Search" />
          <label htmlFor="search" className="bx bx-search-alt-2"></label>
        </form>
      </div>

      <div className="action-icon">
        <ul className="dropdown">
          <li className="btn">
            {localStorage.getItem("token") ? (
              <button className="link-btn" onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <button className="link-btn">
                <Link className="link" to="/login">
                  Login
                </Link>
              </button>
            )}
          </li>
        </ul>
        <div className="icon" onClick={wishlistRouteHandler}>
          <i className="bx bx-heart"></i>
          {wishlist.length !== 0 ? <span>{wishlist.length}</span> : null}
        </div>

        <div className="icon cart-icon" onClick={cartRouteHandler}>
          <i className="bx bx-cart"></i>
          {cart.length !== 0 ? <span>{cart.length}</span> : null}
        </div>
      </div>
    </header>
  );
};

export { Navbar };
