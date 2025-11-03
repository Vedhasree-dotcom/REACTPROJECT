import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import loginImg from "../assets/loginImg.jpg";
import registerImg from "../assets/registerImg.jpg";
import "./AuthPage.css";


export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`auth-container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="auth-image">
        <img
          src={isSignUp ? registerImg : loginImg}
          alt="Salon Visual"
          className="side-img"
        />
      </div>

      <div className="auth-form">
        {isSignUp ? <Register /> : <Login />}
        <button
          className="toggle-btn"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

