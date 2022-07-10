import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Stuard Quiroz");
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        type="button"
        className="btn btn-lg btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
