import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Week 3 Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;