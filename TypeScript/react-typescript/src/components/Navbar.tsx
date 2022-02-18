import React from 'react'

export default function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">To do list</a></li>
        <li><a href="/">About us</a></li>
      </ul>
    </div>
  </nav>  
  
  )
}
