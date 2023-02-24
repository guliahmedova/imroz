import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    }
    else {
      setDropdown(true);
    }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()

  return (
    <div className={classNames(
      scrollPosition > 0 ? 'shadow' : 'shadow-none',
      'header',
    )} >
      <nav className="navbar">
        <Link to="/" className="navbar-logo"><img src="./images/home/logo.png" alt="" /></Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home <i className="fa-solid fa-angle-down"></i></Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
          </li>
          <li
            className="nav-item">
            <Link to="/service" className="nav-links" onClick={closeMobileMenu}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

//responsive
//dropdown