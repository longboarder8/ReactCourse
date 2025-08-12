// import Bootstrap components for building navbar styling
import { Navbar, Nav, Container } from "react-bootstrap";
// import Link to prevent unnecessary HTTP requests
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // create a Bootstrap navbar with light background, large screen expandable, and fixed to top
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* Keeps this week's assignment title in upper corner */}
        <Navbar.Brand>Week 5 - Navbar Routing & Links</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;