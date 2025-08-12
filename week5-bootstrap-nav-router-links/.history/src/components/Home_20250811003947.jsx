// importing this avoids sending new HTTP requests - not ideal way
// as it defeats the purpose of having a single page application
import { Link } from 'react-router-dom';

function HomePage() {
  return <h1>My Home Page</h1>

}

export default HomePage;