import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    console.log("📩 Contact data:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Container className="mt-5 mb-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-center fs-3 mb-3">
            📞 Liên Hệ Với Chúng Tôi
          </Card.Title>

          <p className="text-center text-muted mb-4">
            Nếu bạn có thắc mắc hoặc góp ý, vui lòng gửi thông tin cho chúng tôi.
          </p>

          {success && (
            <Alert variant="success">
              ✅ Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Họ và Tên</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nhập họ tên"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Nhập nội dung liên hệ..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              📩 Gửi Liên Hệ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
