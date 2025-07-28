import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// week2 - don't need: import App from './App.jsx'

// week2 - added the following
import Navbar from './components/Navbar'
// week3 - added bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar /> 
  </StrictMode>,
)
