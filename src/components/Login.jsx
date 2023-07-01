import React from "react";
import { useDispatch } from "react-redux";

const Login = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch({ type: "login" });
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        flexDirection: "column",
      }}
    >
      {isAuthenticated ? (
        <>
          <h1>Logout</h1>
          <button
            style={{
              padding: "0.5rem",
              borderRadius: "12px",
              width: "5rem",
              fontSize: "1rem",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            style={{
              padding: "0.5rem",
              borderRadius: "12px",
              width: "5rem",
              fontSize: "1rem",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
