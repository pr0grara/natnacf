import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">© {new Date().getFullYear()} Natna</div>
          <nav className="footer-nav">
            <Link to="/work">Work</Link>
            <Link to="/missions">Missions</Link>
            <Link to="/about">About</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
