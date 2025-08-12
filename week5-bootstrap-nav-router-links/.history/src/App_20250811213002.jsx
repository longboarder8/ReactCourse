// importing createBrowserRouter and RouterProvider components necessary for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";

const router = createBrowserRouter([
  // define URL route paths & correlating components to load when route is active
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

function App() {
  // const [count, setCount] = useState(0);
  // passing router const to router prop
  return <RouterProvider router={router} />;
  }

export default App;
