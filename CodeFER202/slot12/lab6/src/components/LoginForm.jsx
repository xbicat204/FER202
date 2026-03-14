import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");
    setPasswordError("");

    if (!username || !password) {
      setError("Tài khoản hoặc mật khẩu không chính xác");
      return;
    }

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
        setError("Tài khoản hoặc mật khẩu không chính xác");
        return;
      }

      if (account.status === "locked") {
        setError("Tài khoản bị khóa");
        return;
      }

      // lưu redux
      dispatch(loginSuccess(account));

      // lưu local
      localStorage.setItem("user", JSON.stringify(account));

      // mở modal
      setLoginUser(account);
      setShowModal(true);

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

  // khi bấm Continue
  const handleContinue = () => {
    setShowModal(false);
    navigate("/dashboard");
  };

  return (

    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>

        <h3 className="text-center mb-4">Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>

          <Form.Group className="mb-3">
            <Form.Label>Username or Email</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter username or email"
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
              isInvalid={!!passwordError}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>

            <div className="form-text">
              at least 6 characters
            </div>

          </Form.Group>


          <div className="d-flex gap-2">

            <Button variant="primary" type="submit" className="w-50">
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

      {/* Confirm Modal */}
      <ConfirmModal
        show={showModal}
        onHide={handleContinue}
        user={loginUser}
      />

    </div>

  );
}

export default LoginForm;