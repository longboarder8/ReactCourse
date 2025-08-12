// importing this avoids sending new HTTP requests (which would not be ideal way)
// as it defeats the purpose of having a single page application
import { Link } from 'react-router-dom';

function ContactPage() {
  return <h1>My Contact Page</h1>

}

export default ContactPage;