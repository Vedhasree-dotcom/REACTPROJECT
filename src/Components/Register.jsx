import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from '../assets/registerImg.jpg';
import './Register.css'


function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.name === "" &&
      user.email === "" &&
      user.password === "" 
    ) {
      alert("⚠️ Please fill in all fields before submitting!");
      return;
    }

    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.name === "") newErrors.name = "Name is required.";
    if (user.email === "") newErrors.email = "Email is required.";
    else if (!emailRegex.test(user.email))
      newErrors.email = "Enter a valid email address.";

    if (user.password === "") newErrors.password = "Password is required.";
    else if (user.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    
    setErrors(newErrors);

    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password 
    ) {
      localStorage.setItem("registeredUser", JSON.stringify(user));
      alert("✅ Registration successful! Please login.");
      navigate("/login");
    }
  };

  return (
    <div className="register">
    <div>
      <img src={registerImg} alt="" />
        
    </div>
<div className="sign-up pb-5" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 className="text-center fw-bold">Create an Account</h2>
      <p className="text-center">
        Start your style with <b>Grace & Gloss </b>
      </p>

      <form
        onSubmit={handleSubmit}
       className=" form mt-3 "  
      >
        <label htmlFor="name">
          Name <span style={{ color: "red" }}>*</span><br/>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handleChange}
          className="register-input mt-3"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          className="register-input"
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label htmlFor="password">
          Password <span style={{ color: "red" }}>*</span>
        </label>
        <div style={{ position: "relative", width: "90%" }}>
          <input
          className="register-input"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "7px",
              cursor: "pointer",
              color: "gray",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        
        <button
          type="submit"
          style={{
            backgroundColor: "rgb(226, 91, 114)",
            color: "white",
            padding: "10px 30px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Register;
