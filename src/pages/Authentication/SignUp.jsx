// import "./authentication.css";
import { Link } from "react-router-dom";
import { Navbar } from "./../../components/navbar/Navbar";
import { Footer } from "./../../components/footer/Footer";
import axios from "axios";
import { useAuth } from "../../hooks/context/auth-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [ error, setError] = useState(false)
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setUserCredential({ ...userCredential, [id]: value });
  };

  const checkPassword = () => {
    userCredential.password !== userCredential.confirmPassword
      ? setError("Password doesn't match")
      : setError("");
  };

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      const repsonse = await axios.post("api/auth/signup/", userCredential);
      // console.log(repsonse.data);
      if (repsonse.status === 201) {
        localStorage.setItem("token", repsonse.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(repsonse.data.createdUser));

        authDispatch({
          type: "SIGNUP",
          payload: {
            user: repsonse.data.createdUser,
            token: repsonse.data.encodedToken,
          },
        });
        navigate("/");
      } 
      else if (repsonse.status === 201) {
        throw new Error("User already have an account");
      }
      else if (repsonse.status === 201) {
        throw new Error("Server Error");
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Navbar />
      <div className="box">
        <form className="login-container" method="post" action="">
          <h1>Sign Up</h1>
          <div className="login-credential">
            <div className="login-email">
              <label htmlFor="email">Email address *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={userCredential.email}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="login-password">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={userCredential.password}
                onChange={changeHandler}
                required
              />
              <div>{error}</div>
            </div>

            <div className="confirm-password">
              <label htmlFor="confPwd">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={userCredential.confirmPassword}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="con">
            <div className="remember-me">
              <input type="checkbox" id="remember-box" />
              <label htmlFor="remember-box">
                I accept all the Terms & Conditions
              </label>
            </div>
          </div>

          <div className="login-btns">
            <button type="submit" className="login" onClick={signUpHandler}>
              Sign Up
            </button>
          </div>

          <Link to="/login" className="new-account">
            Already have an account <strong>&#62;</strong>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export { Signup };
