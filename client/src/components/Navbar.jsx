import { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-row">
        <a href="#home" className="brand">ajtech <span>IT Services</span></a>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          Menu
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
         <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar