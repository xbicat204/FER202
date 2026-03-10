import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="mb-4 shadow"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" end>
            Order App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Trang chủ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/quiz">
              Quiz
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Post">
              📝 Posts
            </Nav.Link>
            <Nav.Link as={NavLink} to="/users">
              👥 Users
            </Nav.Link>
            <Nav.Link as={NavLink} to="/news">
              📰 Tin Tức
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          

            <Nav.Link as={NavLink} to="/register">
              Đăng ký Form
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;