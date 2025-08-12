import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBarFix.css';

function CustomNavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <div className="d-flex justify-content-center w-100"></div>
        <Navbar.Brand href="#">Week 3 Project</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;