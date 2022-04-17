import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="link-container">
        <div className="company-info">
          <ul>
            <li className="heading">Company</li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Carrer</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="company-info">
          <ul>
            <li className="heading">Policies</li>
            <li>
              <Link to="#">Privacy Policies</Link>
            </li>
            <li>
              <Link to="#">Terms of Use</Link>
            </li>
            <li>
              <Link to="#">Secure Shopping</Link>
            </li>
            <li>
              <Link to="#">Copyright Policy</Link>
            </li>
          </ul>
        </div>
        <div className="company-info">
          <ul>
            <li className="heading">Help</li>
            <li>
              <Link to="#">Payment</Link>
            </li>
            <li>
              <Link to="#">Shipping</Link>
            </li>
            <li>
              <Link to="#">Return</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copywrite-disclaimer">
        Copyright © 2022 . Savita Verm. All Rights Reserved
      </div>
    </div>
  );
};

export { Footer };
