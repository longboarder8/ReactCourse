import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './NavBarFix.css';

function CustomNavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Brand on the left */}
          <Col xs="auto">
            <Navbar.Brand href="#">Week 3 Project</Navbar.Brand>
          </Col>

          {/* Links centered in their own column */}
          <Col className="text-center">
            <Nav className="justify-content-center">
              <Nav.Link href="#">Link 1</Nav.Link>
              <Nav.Link href="#">Link 2</Nav.Link>
              <Nav.Link href="#">Link 3</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;