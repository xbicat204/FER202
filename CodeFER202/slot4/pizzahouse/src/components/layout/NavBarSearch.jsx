import React from "react";
import "./NavBarSearch.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBarSearch = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3"
          style={{ fontFamily: "serif" }}
        >
          Pizza House
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>

            <Nav.Link as={NavLink} to="/book">
              Book a Table
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSearch;
