// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import HomePage from "./components/Home";
// importing createBrowserRouter and RouterProvider components necessary for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // define URL route paths & correlating components to load when route is active
  { path: "/", element: <HomePage /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Contact", element: <ContactPage /> },
]);

function App() {
  // const [count, setCount] = useState(0);
  // passing router const to router prop
  return <RouterProvider router={router} />;

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
