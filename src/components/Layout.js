import React from 'react'
import { Helmet } from "react-helmet"
import Header from './Header'
import Footer from './Footer'
import '../styles/style.scss'

export default function Layout({children}) {
  return (
    <main className='layout'>
        <Helmet>
          <title>Website Title</title>
        </Helmet>
        <Header/>
            {children}
        <Footer/>
    </main>
  )
}
