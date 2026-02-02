import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header compact">
      <div className="container nav-bar">
        <Link to="/" className="logo">Natna</Link>
        <nav className="nav-links">
          <Link to="/work">Work</Link>
          <Link to="/missions">Missions</Link>
          <Link to="/about">About</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
