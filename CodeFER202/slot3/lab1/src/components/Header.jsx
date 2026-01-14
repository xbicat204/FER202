import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Lab 1: Danh Sach Sinh Vien</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
