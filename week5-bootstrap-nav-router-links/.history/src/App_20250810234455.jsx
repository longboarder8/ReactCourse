import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '', element: <About />}, 
  { path: ''}, 
  { path: ''} 
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;