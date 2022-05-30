import { useNavigate } from "react-router-dom";
import "./error.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=338&ext=jpg"
        alt="404 error"
      />
      <button className="btn error404btn" onClick={() => navigate("/")}>
        Return to Explore
      </button>
    </div>
  );
};

export { Error404 };
