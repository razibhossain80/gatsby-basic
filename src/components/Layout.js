import React from 'react'
import Navbar from './Navbar'
import '../styles/style.scss'

export default function Layout({children}) {
  return (
    <main className='layout'>
        <Navbar/>
            {children}
        <footer>This is footer</footer>

    </main>
  )
}
