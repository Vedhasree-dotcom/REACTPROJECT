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
    <div className="sign-in pb-5 me-3 pe-3 ">
      <h2><b>Welcome Back</b></h2>
      <Form
        className=" form mt-3 "
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label className="ps-4 mt-2 text-dark"
          style={{fontSize: "16px",fontStyle:"oblique", fontWeight:"500"}} >
          Email address</Form.Label>
          <Form.Control
            type="email"
            className="ms-4  w-50 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-secondary ms-4">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Label className="ps-4 mt-2 text-dark" 
          style={{fontSize: "16px",fontStyle:"oblique", fontWeight:"500"}}>
            Password</Form.Label>

          <div className="d-flex align-items-center ms-4">
            <Form.Control
              type={showPassword ? "text" : "password"}
              className="w-50 "
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

        <Form.Group className="mb-3 ms-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" className="text-dark"
            style={{fontSize: "15px",fontStyle:"oblique"}} />
        </Form.Group>

        

        <Button  type="submit" className="mt-3 ps-5 w-50 pe-5 text-light"
         style={{backgroundColor: "rgb(226, 91, 114)",
          border: "none",
          marginLeft: "20px"
          }} >
          <b>Submit</b>
        </Button>


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
  );
}

export default Login;
