import React,{useState} from 'react'
import { Helmet } from "react-helmet"
import Context  from "./Context.js";
import Header from './Header'
import Footer from './Footer'
import '../styles/style.scss'

export default function Layout({children}) {
  const [context, setContext] = useState("old context value");

  console.log(`layout ${context}`)
  return (
    <Context.Provider value={[context, setContext]}>
    <main className='layout'>
        <Helmet>
          <title>Website Title</title>
        </Helmet>
        <Header/>
            {children}
        <Footer/>
    </main>
    </Context.Provider>
  )
}
