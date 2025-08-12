import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  // define route paths & correlating components to load when route is active
  { path: './components/Home', element: <Home />}, 
  { path: '', element: <About />}, 
  { path: '', element: <Contact />}  
])

function App() {
  // const [count, setCount] = useState(0);
  return <RouterProvider router={router} />;

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;