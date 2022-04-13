import React from 'react'
import {Link, useStaticQuery, graphql } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {title} = data.site.siteMetadata

  return (
    <nav className='links'>
      {title}
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Project Portfolio</Link>
      </ul>
    </nav>
  )
}
