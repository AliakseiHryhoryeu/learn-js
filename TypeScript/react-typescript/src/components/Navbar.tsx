import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper purple darken-2">
      <Link to="/" className="brand-logo">React & TypeScript</Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">To do list</Link></li>
        <li><Link to="/about">About us</Link></li>
      </ul>
    </div>
  </nav>  
  
  )
}
