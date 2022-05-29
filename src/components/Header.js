import React,{useContext} from 'react'
import Context from './Context'
import {Link} from "gatsby"

const Header = () => {

  const [context, setContext] = useContext(Context);
  
    const onClickHandler = ()=>{
      setContext("New context value")
      console.log(`footer ${context}`)
    }
    

  return (
    <div className="header">
        <nav className='links'>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about" onClick={onClickHandler} style={{color:"red"}}>About onClick</Link>
                <Link to="/projects">Project Portfolio</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header