import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";
import { useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "../../hooks";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState, authDispatch } = useAuth();
  const { cart } = cartState;
  const { wishlist } = wishlistState;
  const { authState: {token}} = useAuth();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    cartDispatch({type: "EMPTY_CART"})
    wishlistDispatch({type: "EMPTY_WISHLIST"})
    toast.success("Successfully Logged Out");
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
        
      </div>

      <div className="action-icon">
        <ul className="dropdown">
          <li className="btn">
            {token ? (
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
