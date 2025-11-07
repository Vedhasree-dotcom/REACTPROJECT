import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from "../assets/loginImg.jpg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter a valid email address.";

    if (!password) newErrors.password = "Password is required.";
    else if (!passwordRegex.test(password))
      newErrors.password =
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (registeredUsers.length === 0) {
      setMessage("❌ No registered users found. Please register first.");
      setTimeout(() => navigate("/register"), 2000);
      return;
    }

    const validUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!validUser) {
      setMessage("❌ Invalid email or password.");
    } else {
      setMessage("✅ Login successful!");

      const userData = {
        name: validUser.name,
        email: validUser.email,
      };
      localStorage.setItem("userDetails", JSON.stringify(userData));

      setTimeout(() => navigate("/"), 1000);
    }
  };

  return (
    <div className="login d-flex">
      <div>
        <img src={loginImg} alt="Login Banner" />
      </div>

      <div className="sign-in pt-5">
        <h2>
          <b>Welcome Back</b>
        </h2>

        <Form className="form mt-3" onSubmit={handleSubmit}>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label
              className="ps-3 mt-2 text-dark"
              style={{ fontSize: "16px", fontStyle: "oblique", fontWeight: "500" }}
            >
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              className={`ms-3 w-100 ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <Form.Text className="text-danger ms-3">{errors.email}</Form.Text>
            )}<br/>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label
              className="ps-3 mt-1 text-dark"
              style={{ fontSize: "16px", fontStyle: "oblique", fontWeight: "500" }}
            >
              Password
            </Form.Label>

            <div className="d-flex w-100 align-items-center ms-3">
              <Form.Control
                type={showPassword ? "text" : "password"}
                className={`w-100 ${errors.password ? "is-invalid" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="link"
                className="text-secondary ms-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
            {errors.password && (
              <Form.Text className="text-danger ms-3">{errors.password}</Form.Text>
            )}
          </Form.Group>

          <Button
            type="submit"
            className="mt-3 mb-3 ps-5 w-100 pe-5 text-light"
            style={{
              backgroundColor: "rgb(226, 91, 114)",
              border: "none",
              marginLeft: "20px",
            }}
          >
            <b>Submit</b>
          </Button>

          <p className="text-center fw-500">
            Don't have an account?{" "}
            <Link className="click text-decoration-none" to="/register">
              Sign Up
            </Link>
          </p>

          {message && (
            <p
              className="text-center mt-2"
              style={{
                color: message.includes("✅") ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Login;
