import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setPasswordError("");

    // empty
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    // password length
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    try {

      const res = await axios.get("http://localhost:3001/accounts");

      const account = res.data.find(
        (acc) =>
          (acc.username === username || acc.email === username) &&
          acc.password === password
      );

      if (!account) {
        setError("Invalid username or password");
        return;
      }

      if (account.status === "locked") {
        setError("Account is locked");
        return;
      }

      // lưu user
      localStorage.setItem("user", JSON.stringify(account));

      // phân quyền
      if (account.role === "admin") {
        navigate("/accounts"); // admin page
      } else {
        navigate("/expenses"); // user page
      }

    } catch (err) {
      setError("Server error");
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError("");
    setPasswordError("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <Card style={{ width: "350px" }} className="p-4 shadow">

        <h3 className="text-center mb-3">Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              isInvalid={passwordError}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>

            <small className="text-muted">(at least 6 characters)</small>
          </Form.Group>

          <div className="d-flex gap-2">

            <Button type="submit" className="w-50">
              Login
            </Button>

            <Button
              variant="secondary"
              className="w-50"
              onClick={handleCancel}
            >
              Cancel
            </Button>

          </div>

        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;