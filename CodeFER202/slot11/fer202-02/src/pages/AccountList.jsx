import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Badge,
  Form,
  Row,
  Col,
  Toast
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AccountList() {

  const [accounts, setAccounts] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  // user đang login
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const fetchAccounts = async () => {
    const res = await axios.get("http://localhost:3001/accounts");
    setAccounts(res.data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const toggleStatus = async (account) => {

    const newStatus =
      account.status === "active"
        ? "locked"
        : "active";

    await axios.patch(
      `http://localhost:3001/accounts/${account.id}`,
      { status: newStatus }
    );

    setToastMessage(
      newStatus === "locked"
        ? "Account locked successfully"
        : "Account unlocked successfully"
    );

    setShowToast(true);

    fetchAccounts();
  };

  const filteredAccounts = accounts.filter((acc) => {

    const matchSearch =
      acc.username.toLowerCase().includes(search.toLowerCase()) ||
      acc.email.toLowerCase().includes(search.toLowerCase());

    const matchRole =
      roleFilter === "all" || acc.role === roleFilter;

    const matchStatus =
      statusFilter === "all" || acc.status === statusFilter;

    return matchSearch && matchRole && matchStatus;
  });

  return (

    <div className="container mt-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h3>Account Management</h3>

        <div className="d-flex align-items-center">

          <img
            src={user?.avatar}
            alt="avatar"
            width="35"
            height="35"
            className="rounded-circle me-2"
          />

          <span className="fw-bold me-3">
            {user?.username}
          </span>

          <Button
            variant="danger"
            onClick={handleLogout}
          >
            Logout
          </Button>

        </div>

      </div>

      {/* SEARCH + FILTER */}
      <Row className="mb-3">

        <Col md={4}>
          <Form.Control
            placeholder="Search username or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </Col>

        <Col md={2}>
          <Form.Select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
          >
            <option value="all">All Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Col>

        <Col md={2}>
          <Form.Select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="locked">Locked</option>
          </Form.Select>
        </Col>

      </Row>

      {/* TABLE */}
      <Table striped bordered hover responsive>

        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredAccounts.map((acc) => (

            <tr key={acc.id}>

              <td>
                <img
                  src={acc.avatar}
                  alt="avatar"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </td>

              <td>{acc.username}</td>
              <td>{acc.email}</td>
              <td>{acc.role}</td>

              <td>
                {acc.status === "active"
                  ? (
                    <Badge bg="success">
                      Active
                    </Badge>
                  )
                  : (
                    <Badge bg="danger">
                      Locked
                    </Badge>
                  )}
              </td>

              <td>

                <Button
                  size="sm"
                  variant="primary"
                  className="me-2"
                  onClick={() =>
                    navigate(`/accounts/${acc.id}`)
                  }
                >
                  View
                </Button>

                <Button
                  size="sm"
                  variant={
                    acc.status === "active"
                      ? "danger"
                      : "success"
                  }
                  onClick={() =>
                    toggleStatus(acc)
                  }
                >
                  {acc.status === "active"
                    ? "Lock"
                    : "Unlock"}
                </Button>

              </td>

            </tr>

          ))}

        </tbody>

      </Table>

      {/* TOAST */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        style={{
          position: "fixed",
          top: 20,
          right: 20
        }}
      >

        <Toast.Body className="bg-success text-white">
          {toastMessage}
        </Toast.Body>

      </Toast>

    </div>
  );
}

export default AccountList;