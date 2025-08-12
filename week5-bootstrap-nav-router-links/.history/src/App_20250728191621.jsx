import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
    </>
  );
}

export default App;