import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopupLoginReminder.css";

const PopupLoginReminder = () => {
  const navigate = useNavigate();

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Welcome to Grace & Gloss✨ </h2>
        <p>Please login or register to continue exploring our salon services.</p>

        <div className="popup-buttons">
          <button
            onClick={() => navigate("/login")}
            className="popup-btn w-100 login"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="popup-btn w-100  register"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupLoginReminder;
