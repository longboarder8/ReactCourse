import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Week 5 - Navbar Routing & Links</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;