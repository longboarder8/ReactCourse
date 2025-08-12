import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar({ links }) {
  return (
    <Navbar className="navbar" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Week 4 Extra Credit</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href={links[0].url}>{links[0].name}</Nav.Link>
          <Nav.Link href={links[1].url}>{links[1].name}</Nav.Link>
          <Nav.Link href={links[2].url}>{links[2].name}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;