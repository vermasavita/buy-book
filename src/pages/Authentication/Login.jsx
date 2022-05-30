import "./authentication.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const guestUserCredential = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const changeHandler = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const guestUserCredentialHandler = (event) => {
    event.preventDefault();
    setUser(guestUserCredential);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const repsonse = await axios.post("api/auth/login", user);
      if (repsonse.status === 200) {
        localStorage.setItem("token", repsonse.data.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify(repsonse.data.foundUser)
        );

        authDispatch({
          type: "LOGIN",
          payload: {
            user: repsonse.data.foundUser,
            token: repsonse.data.encodedToken,
          },
        });
        toast.success("Successfully Logged In");
        navigate("/");
      } else if (repsonse.status === 401) {
        throw new Error("Enter correct password");
      } else if (response.status === 404) {
        throw new Error("Email not found");
      } else if (response.status === 500) {
        throw new Error("Server error");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };
  return (
    <div className="container">
      <div className="box">
        <form className="login-container" method="post">
          <h1>Login</h1>
          <div className="login-credential">
            <div className="login-email">
              <label htmlFor="email">Email address *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="adarshbalika@gmail.com"
                value={user.email}
                required
                onChange={changeHandler}
              />
            </div>

            <div className="login-password">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                value={user.password}
                required
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="login-btns">
            <button
              className="new-account"
              onClick={guestUserCredentialHandler}
            >
              Add Guest Credential
            </button>
            <button className="login" type="submit" onClick={loginHandler}>
              Login
            </button>
          </div>

          <Link to="/signup" className="new-account">
            Create New Account <strong>&#62;</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export { Login };
