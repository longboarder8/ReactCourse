// importing this avoids sending new HTTP requests (which reloads unnecessarily)
// as it defeats the purpose of having a single page application
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavBar from "./NavBar";

function HomePage() {
  return <h1>My Home Page</h1>

}

export default HomePage;