import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;