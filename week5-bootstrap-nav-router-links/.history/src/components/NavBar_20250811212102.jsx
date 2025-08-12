import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Week 5 - Navbar Routing & Links</Navbar.Brand>
        <Nav className="mx-auto">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contacts'>Contacts</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;