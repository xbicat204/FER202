import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

function AccountDetail() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/accounts/${id}`)
      .then((res) => setAccount(res.data));
  }, [id]);

  if (!account) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <Card style={{ width: "400px" }}>
        <Card.Body className="text-center">
          <img
            src={account.avatar}
            alt="avatar"
            width="100"
            className="rounded-circle mb-3"
          />

          <h4>{account.username}</h4>
          <p>Email: {account.email}</p>
          <p>Role: {account.role}</p>

          <p>
            Status:{" "}
            {account.status === "active" ? (
              <Badge bg="success">Active</Badge>
            ) : (
              <Badge bg="danger">Locked</Badge>
            )}
          </p>

          <Button
            variant="secondary"
            onClick={() => navigate("/accounts")}
          >
            Back to List
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AccountDetail;