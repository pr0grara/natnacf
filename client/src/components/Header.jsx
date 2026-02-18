import React from 'react'
import { Link } from 'react-router-dom'
import natna_logo from '../assets/natna_logo_new.png';

export default function Header() {
  return (
    <header className="site-header compact">
      <div className="container nav-bar">
        <Link to="/" className="logo-link">
          <img src={natna_logo} alt="NATNA" className="logo" />
          <div className="logo-text">
            <span className="logo-title">NATNA</span>
            <span className="logo-subtitle">CHILDREN'S FOUNDATION</span>
          </div>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/missions">Programs & Projects</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/donate">Donate</Link>
        </nav>
      </div>
    </header>
  )
}
