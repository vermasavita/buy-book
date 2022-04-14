import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartState} = useCart();
  const { authState, authDispatch } = useAuth();
  const { cart } = cartState;
  

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    authDispatch({ type: "LOGOUT" });
  };

  const cartRoutHandler = () => {
    authState.token? navigate('/cart'): navigate('/login')
  }

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
        <Link to="/wishlist" className="icon">
          <i className="bx bx-heart"></i>
          <span>0</span>
        </Link>

        <div className="icon" onClick={cartRoutHandler}>
          <i className="bx bx-cart"></i>
          {cart.length !== 0 ?<span>{cart.length}</span>: null}
        </div>
      </div>
    </header>
  );
};

export { Navbar };
