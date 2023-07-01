import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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
      <h1>Profile</h1>
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
    </div>
  );
};

export default Profile;
