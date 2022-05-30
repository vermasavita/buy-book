// import "./authentication.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
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
    if (user.password !== user.confirmPassword) {
      toast.error("Password doesn't match");
    } else {
      return true;
    }
  };
  const signUpHandler = async (event) => {
    event.preventDefault();
    if (checkInputFields()) {
      if (checkPassword()) {
        try {
          const repsonse = await axios.post("api/auth/signup/", userCredential);
          if (repsonse.status === 201) {
            authDispatch({
              type: "SIGNUP",
              payload: {
                user: repsonse.data.createdUser,
                token: repsonse.data.encodedToken,
              },
            });
            toast.success("Successfully Signed Up");
            navigate("/");
          } else if (repsonse.status === 201) {
            throw new Error("User already have an account");
          } else if (repsonse.status === 201) {
            throw new Error("Server Error");
          }
        } catch (error) {
          toast.error(error.response.data.errors[0]);
        }
      }
    } else {
      toast.error("Enter all the fields");
    }
  };

  return (
    <div className="container">
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
    </div>
  );
};

export { Signup };
