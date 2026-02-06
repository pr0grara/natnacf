import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header compact">
      <div className="container nav-bar">
        <Link to="/" className="logo">Natna</Link>
        <nav className="nav-links">
          <Link to="/work">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/missions">Programs & Projects</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
