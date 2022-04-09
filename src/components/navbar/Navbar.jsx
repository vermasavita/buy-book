import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">ByBook</Link>
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
            <Link className="link" to="/login">
              Login
            </Link>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="">
                    <i className="bx bxs-user-circle"></i>My Profile
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/">
                    <i className="bx bx-shopping-bag"></i>Orders
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="">
                    <i className="bx bx-power-off"></i>Logout
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <Link to="/wishlist" className="icon">
          <i className="bx bx-heart"></i>
          <span>0</span>
        </Link>

        <Link to="/cart" className="icon">
          <i className="bx bx-cart"></i>
          <span>0</span>
        </Link>
      </div>
    </header>
  );
};

export { Navbar };
