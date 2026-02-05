import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import './DangKy.css';

function DangKy() {
  const [formData, setFormData] = useState({
    hoTen: '',
    email: '',
    matKhau: '',
    xacNhanMatKhau: '',
    gioiTinh: 'nam',
    dienThoai: '',
    diaChi: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.hoTen.trim()) {
      newErrors.hoTen = 'Vui lòng nhập họ tên';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!formData.matKhau) {
      newErrors.matKhau = 'Vui lòng nhập mật khẩu';
    } else if (formData.matKhau.length < 6) {
      newErrors.matKhau = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    
    if (!formData.xacNhanMatKhau) {
      newErrors.xacNhanMatKhau = 'Vui lòng xác nhận mật khẩu';
    } else if (formData.matKhau !== formData.xacNhanMatKhau) {
      newErrors.xacNhanMatKhau = '❌ Mật khẩu không khớp!';
    }
    
    if (!formData.dienThoai.trim()) {
      newErrors.dienThoai = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.dienThoai)) {
      newErrors.dienThoai = 'Số điện thoại phải có 10-11 chữ số';
    }
    
    if (!formData.diaChi.trim()) {
      newErrors.diaChi = 'Vui lòng nhập địa chỉ';
    } else if (formData.diaChi.trim().length < 5) {
      newErrors.diaChi = 'Địa chỉ phải có ít nhất 5 ký tự';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSuccess(true);
      console.log('✅ Dữ liệu đăng ký:', formData);
      
      setFormData({
        hoTen: '',
        email: '',
        matKhau: '',
        xacNhanMatKhau: '',
        gioiTinh: 'nam',
        dienThoai: '',
        diaChi: ''
      });
      
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <Container className="mt-4 mb-4">
      <Card className="register-card">
        <Card.Body style={{ display: 'flex', flexDirection: 'column', minHeight: '700px' }}>
          <Card.Title className="mb-4">📝 Đăng Ký Tài Khoản</Card.Title>
          
          {success && (
            <Alert variant="success" dismissible onClose={() => setSuccess(false)}>
              ✅ Đăng ký thành công!
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit} noValidate style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              <Form.Group className="mb-3">
                <Form.Label>Họ Tên</Form.Label>
                <Form.Control
                  type="text"
                  name="hoTen"
                  placeholder="VD: Nguyễn Văn A"
                  value={formData.hoTen}
                  onChange={handleChange}
                  isInvalid={!!errors.hoTen}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.hoTen}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="VD: user@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mật Khẩu</Form.Label>
                <Form.Control
                  type="password"
                  name="matKhau"
                  placeholder="Tối thiểu 6 ký tự"
                  value={formData.matKhau}
                  onChange={handleChange}
                  isInvalid={!!errors.matKhau}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.matKhau}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Xác Nhận Mật Khẩu</Form.Label>
                <Form.Control
                  type="password"
                  name="xacNhanMatKhau"
                  placeholder="Nhập lại mật khẩu"
                  value={formData.xacNhanMatKhau}
                  onChange={handleChange}
                  isInvalid={!!errors.xacNhanMatKhau}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.xacNhanMatKhau}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Giới Tính</Form.Label>
                <Form.Select 
                  name="gioiTinh" 
                  value={formData.gioiTinh} 
                  onChange={handleChange}
                >
                  <option value="nam">🧑 Nam</option>
                  <option value="nu">👩 Nữ</option>
                  <option value="khac">❓ Khác</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Điện Thoại</Form.Label>
                <Form.Control
                  type="tel"
                  name="dienThoai"
                  placeholder="VD: 0123456789"
                  value={formData.dienThoai}
                  onChange={handleChange}
                  isInvalid={!!errors.dienThoai}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dienThoai}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Địa Chỉ</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="diaChi"
                  placeholder="VD: 123 Đường ABC, Quận 1, TP.HCM"
                  value={formData.diaChi}
                  onChange={handleChange}
                  isInvalid={!!errors.diaChi}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.diaChi}
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <Button 
              variant="primary" 
              type="submit"
              className="btn-submit"
            >
              ✓ Đăng Ký
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DangKy;