import React from "react";
import { Container, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5 mb-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-center fs-3 mb-4">
            🍕 Giới Thiệu Sản Phẩm Đồ Ăn
          </Card.Title>

          <p>
            Chúng tôi chuyên cung cấp các <strong>sản phẩm đồ ăn chất lượng cao</strong>,
            được chế biến từ nguyên liệu tươi ngon, đảm bảo vệ sinh an toàn thực phẩm
            và mang đến hương vị thơm ngon cho khách hàng.
          </p>

          <p>
            Mỗi món ăn đều được chuẩn bị cẩn thận bởi đội ngũ đầu bếp giàu kinh nghiệm,
            kết hợp giữa hương vị truyền thống và phong cách hiện đại.
          </p>

          <h5 className="mt-4">🥗 Các sản phẩm chính</h5>
          <ul>
            <li>Pizza – đa dạng hương vị</li>
            <li>Burger – thơm ngon, đầy đặn</li>
            <li>Gà rán – giòn rụm, hấp dẫn</li>
            <li>Mì Ý – đậm đà chuẩn vị</li>
            <li>Đồ uống – nước ngọt, trà, nước ép</li>
          </ul>

          <h5 className="mt-4">⭐ Cam kết chất lượng</h5>
          <ul>
            <li>Nguyên liệu tươi mỗi ngày</li>
            <li>Không sử dụng chất bảo quản độc hại</li>
            <li>Đảm bảo vệ sinh an toàn thực phẩm</li>
            <li>Phục vụ nhanh chóng, chuyên nghiệp</li>
          </ul>

          <p className="text-muted mt-4">
            Chúng tôi luôn mong muốn mang đến cho khách hàng những bữa ăn
            ngon miệng, tiện lợi và đáng tin cậy.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
