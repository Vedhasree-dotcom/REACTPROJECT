import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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
      user.password === "" &&
      user.phone === ""
    ) {
      alert("⚠️ Please fill in all fields before submitting!");
      return;
    }

    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (user.name === "") newErrors.name = "Name is required.";
    if (user.email === "") newErrors.email = "Email is required.";
    else if (!emailRegex.test(user.email))
      newErrors.email = "Enter a valid email address.";

    if (user.password === "") newErrors.password = "Password is required.";
    else if (user.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (user.phone === "") newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(user.phone))
      newErrors.phone = "Phone number must be 10 digits.";

    setErrors(newErrors);

    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.phone
    ) {
      localStorage.setItem("registeredUser", JSON.stringify(user));
      alert("✅ Registration successful! Please login.");
      navigate("/login");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2 className="text-success">Create an Account</h2>
      <p>
        Start your style with <b>Grace & Gloss 💅</b>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          backgroundColor: "plum",
          padding: "30px",
          borderRadius: "30px",
          width: "450px",
          margin: "0 auto",
        }}
      >
        <label htmlFor="name">
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleChange}
          style={{ width: "90%", padding: "8px" }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
          style={{ width: "90%", padding: "8px" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label htmlFor="password">
          Password <span style={{ color: "red" }}>*</span>
        </label>
        <div style={{ position: "relative", width: "90%" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", paddingRight: "50px" }}
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

        <label htmlFor="phone">
          Phone <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your number"
          value={user.phone}
          onChange={handleChange}
          style={{ width: "90%", padding: "8px" }}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

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
  );
}

export default Register;
