import React from 'react'
import {Link} from 'gatsby'

export default function Navbar() {
  return (
    <nav className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Project Portfolio</Link>
    </nav>
  )
}
