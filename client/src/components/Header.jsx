import React from 'react'
import { Link } from 'react-router-dom'
import natna_logo from '../assets/natna_logo.png';

export default function Header() {
  return (
    <header className="site-header compact">
      <div className="container nav-bar">
        {/* <img src={natna_logo} alt="" className="logo" /> */}
        <Link to="/" className=""><img src={natna_logo} alt="" className="logo" /></Link>
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
