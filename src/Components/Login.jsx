import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setMessage("❌ Please fill in both email and password.");
      return;
    } else if (email && !password) {
      setMessage("❌ Please fill the password field also.");
      return;
    } else if (!email && password) {
      setMessage("❌ Please fill the email field also.");
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      setMessage("❌ No user found. Please register first.");
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

      setTimeout(() => navigate("/home"), 1000);
    }
  };

  return (
    <div className="ms-5 mb-3">
      <h2 className="ms-5 mt-5 text-success"><b>Login</b></h2>

      <Form
        className="ms-5 mt-4 w-50 p-4"
        style={{ borderRadius: "40px", backgroundColor: "plum" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="ps-4 mt-3 text-light">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="ms-4 w-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-light ms-4">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="ps-4 mt-4 text-light">Password</Form.Label>
          <div className="d-flex align-items-center ms-4">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="link"
              className="text-light ms-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3 ms-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" className="text-light" />
        </Form.Group>

        <p style={{ color: "black" }}>
          Don't have an account?{" "}
          <Link className="text-success text-decoration-none" to="/register">
            Register now
          </Link>
        </p>

        <Button variant="dark" type="submit" className="ms-4 mb-3 mt-3 text-light">
          <b>Submit</b>
        </Button>


        {message && (
          <p
            className="ms-4 mt-3"
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
  );
}

export default Login;
