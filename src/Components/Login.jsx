import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import loginImg from '../assets/loginImg.jpg';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!email && !password) {
      alert("❌ Please fill in both email and password.");
      return;
    } else if (email && !password) {
      alert("❌ Please fill the password field also.");
      return;
    } else if (!email && password) {
      alert("❌ Please fill the email field also.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("❌ Password must contain:\n- At least 8 characters\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character");
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
  alert("❌ No user found. Please register first.");
  navigate("/register");
  return;
  }

    if (email !== registeredUser.email || password !== registeredUser.password) {
      setMessage("❌ Invalid email or password.");
    } else {
      setMessage("✅ Login successful!");

      const userData = {
        name: registeredUser.name,
        email: registeredUser.email,
      };
      localStorage.setItem("userDetails", JSON.stringify(userData));

      setTimeout(() => navigate("/"), 1000);
    }
  }; 

  return (
    <div className="login d-flex">
      <div>
        <img src={loginImg} alt="" />
      </div>

      <div className="sign-in pt-5">
        <h2><b>Welcome Back</b></h2>

        <Form className="form mt-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="ps-3 mt-2 text-dark"
              style={{ fontSize: "16px", fontStyle: "oblique", fontWeight: "500" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              className="ms-3 w-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-secondary ms-4">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="ps-3 mt-2 text-dark"
              style={{ fontSize: "16px", fontStyle: "oblique", fontWeight: "500" }}>
              Password
            </Form.Label>

            <div className="d-flex w-100 align-items-center ms-3">
              <Form.Control
                type={showPassword ? "text" : "password"}
                className="w-100"
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
              className="ms-4 mt-1"
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
