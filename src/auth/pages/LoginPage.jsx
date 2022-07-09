import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
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
