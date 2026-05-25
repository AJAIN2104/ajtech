import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>
          <h3>AjTech IT Services</h3>
          <p className="muted">Built as a MERN internship project with a real backend path.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
         <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer