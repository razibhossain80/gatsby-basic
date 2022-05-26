import React from 'react'
import {Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
    
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
    <div className="header">
        <nav className='links'>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Project Portfolio</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header