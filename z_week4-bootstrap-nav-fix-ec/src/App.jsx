import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

const navLinks = [
  { name: "Link 1", url: "#" },
  { name: "Link 2", url: "#" },
  { name: "Link 3", url: "#" }
];

const linkData = {
  title: "Link 1",
  content: "This is content for Link 1.",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar links={navLinks} />

      <Body title={linkData.title} content={linkData.content} />

      <Footer />
    </>
  );
}

export default App;
