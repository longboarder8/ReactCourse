import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavBar from './NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;