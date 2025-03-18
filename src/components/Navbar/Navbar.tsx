import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css";

export const Navbar = ()=> {
  const [menuOpen, setMenuOpen] = useState(false)
  const [className, setClassName] = useState<string>("icon-menu")
  return (
    <header>
      <nav className={'flex items-start justify-between p-4'}>
        <Link className={'title text-primary m-2'} to={'/'}>
          Atrium</Link>
        {/*<div className="toggle">*/}
          <div className={"main-nav"}>
            <ul className={menuOpen ? 'open' : ''}>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>Services
                <ul className={'sub-menu'}>
                  <li>
                    <NavLink to={'/services/home-staging'}>Home Staging</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/services/furnish-and-style'}>Furnish and Style</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/services/vacation-rental'}>Vacation Rental</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact us</NavLink>
              </li>
              <li>
                <NavLink to={'/get-a-quote'}>Get a quote</NavLink>
              </li>
            </ul>
          </div>
          <div className={className} onClick={() => {
            setMenuOpen(!menuOpen);
            setClassName(!menuOpen ? "icon-menu active" : "icon-menu");
          }}><span></span></div>
        {/*</div>*/}
      </nav>
    </header>

  )
}
