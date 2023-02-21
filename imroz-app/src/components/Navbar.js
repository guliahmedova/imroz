import { useState } from "react"
import { Link } from "react-router-dom"
import { useScrollPosition } from "../hooks/useScrollPosition.js";
import DropdownMenu from "./DropdownMenu"

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
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-3">
            <div className="logo"><Link to="/"><img src="./images/logo.png" alt="" /></Link></div>
          </div>
          <nav className="navbar">
            <div className="col-lg-10 col-md-10 col-sm-9">
              <DropdownMenu />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

//responsive
//dropdown