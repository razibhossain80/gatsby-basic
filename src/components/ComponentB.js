import React,{useContext} from 'react'
import Context from './Context'
import {Link, useStaticQuery, graphql } from "gatsby"

const ComponentB = () => {
    
    const [context, setContext] = useContext(Context);

    console.log(`component b ${context}`)

  return (
    <div className="component-b">
    <h1>component {context}</h1>
        
    </div>
  )
}

export default ComponentB