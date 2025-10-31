import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("❌ Invalid email address");
    } else if (password.length < 6) {
      setMessage("❌ Password must be at least 6 characters long");
    } else {
      setMessage("✅ Login successful!");

      const userData = {
        name: email.split("@")[0], 
        email: email,
         };
      localStorage.setItem("userDetails", JSON.stringify(userData));
    }
  };

  return (
    <div className="ms-5 mb-3">
      <h2 className="ms-5 mt-5 text-success">
        <b>Login</b>
      </h2>

      <Form
        className="ms-5 mt-4 w-50 p-4"
        style={{
          borderRadius: "40px",
          backgroundColor: "plum",
        }}
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
          <Form.Control
            type="password"
            placeholder="Password"
            className="ms-4 w-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 ms-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" className="text-light" />
        </Form.Group>

        <Button variant="dark" type="submit" className="ms-4 mb-3 mt-3 text-light">
          <b>Submit</b>
        </Button>

        {message && (
          <p
            className="ms-4 mt-3"
            style={{ color: message.includes("✅") ? "green" : "red", fontWeight: "bold" }}
          >
            {message}
          </p>
        )}
      </Form>
    </div>
  );
}

export default Login;
