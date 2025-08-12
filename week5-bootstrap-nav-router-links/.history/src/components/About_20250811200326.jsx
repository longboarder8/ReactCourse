// importing this avoids sending new HTTP requests (which reloads unnecessarily)
// as it defeats the purpose of having a single page application
import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import NavBar from "./components/NavBar";

function AboutPage() {
  return <h1>My About Page</h1>

}

export default AboutPage;