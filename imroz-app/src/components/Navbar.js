import { useState } from "react"
import { Link } from "react-router-dom"
import { useScrollPosition } from "../hooks/useScrollPosition.js";

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
          <nav className="navbar">
            <div className="col-lg-2 col-md-2 col-sm-3">
              <div className="logo"><Link to="/"><img src="./images/logo.png" alt="" /></Link></div>
            </div>
            <div className="col-lg-11">
              <ul className="nav-menu">
                <li className="nav-item">
                  <a>Home</a>
                  <ul className="sub-nav-menu">
                    <li>
                      <Link to="/maindemo">Main Demo</Link>
                    </li>
                    <li>
                      <Link to="/maindemodark">Main Demo Dark</Link>
                    </li>
                    <li>
                      <Link to="/creativeportfolio">Creative Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/startup">StartUp</Link>
                    </li>
                    <li>
                      <Link to="/digitalagency">Digital Agency</Link>
                    </li>
                    <li>
                      <Link to="/studioagency">Studio Agency</Link>
                    </li>
                    <li>
                      <Link to="/business">Business</Link>
                    </li>
                    <li>
                      <Link to="/interiorlanding">Interior Landing</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item">
                  <a>Service</a>
                  <ul className="sub-nav-menu">
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/servicedetails">Service Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a>Pages</a>
                  <ul className="sub-nav-menu">
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/portfoliodetails">Portfolio Detsils</Link>
                    </li>
                    <li>
                      <Link to="/blogdetails">Blog Detsils</Link>
                    </li>
                    <li>
                      <Link to="/bloglist">Blog List</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item"><Link to="/contact">About</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

//responsive
//dropdown