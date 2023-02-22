import { useState } from "react"
import { Link } from "react-router-dom"
import { useScrollPosition } from "../../hooks/useScrollPosition";

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const scrollPosition = useScrollPosition()

  return (
    <header className={classNames(
      scrollPosition > 0 ? 'shadow' : 'shadow-none',
      'header',
    )} >
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          <div className="logo">
            <Link to="/"><img src="./images/home/logo.png" alt="" /></Link>
          </div>
        </a>

        <Link to="/about">About</Link>
        
      </div>
    </header>
  )
}

//responsive
//dropdown