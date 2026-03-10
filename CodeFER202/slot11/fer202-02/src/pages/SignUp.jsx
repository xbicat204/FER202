import { useState } from "react";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!username || !email || !password) {
      setMessage("All fields are required.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/accounts", {
        username,
        email,
        password,
        role: "user",        // mặc định là user
        status: "active",    // mặc định active
        avatar: "/images/users/default.png"
      });

      alert("Account created successfully!");
      navigate("/login");

    } catch (err) {
      setMessage("Error creating account.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Sign Up</h3>

        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {message && (
            <p className="text-danger text-center">{message}</p>
          )}

          <Button type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default SignUp;