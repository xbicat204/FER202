import React from "react";
import Card from "react-bootstrap/Card";

function Content() {
  return (
    <div className="container mt-4">
      <Card className="content-card">
        <Card.Body>
          <h4 className="content-title">Thông tin sinh viên</h4>
          <p>
            <strong>Họ tên:</strong> Tong Phuc Khiem
          </p>
          <p>
            <strong>Mã sinh viên:</strong> De180092
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content;
