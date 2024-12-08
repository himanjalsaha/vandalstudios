import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/Navbar.jsx'
import Component from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <NavBar/>
    <App />
    <Component/>
  </StrictMode>,
)
