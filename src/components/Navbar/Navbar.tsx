import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const logo = require("../../../src/images/header-logo.webp");

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [className, setClassName] = useState<string>("icon-menu");
  return (
    <div className={"header-wrap"}>
      <header>
        <nav className={"flex items-start justify-between lg:py-4"}>
          <div className={"logo-nav"}>
            <Link className={"title text-primary"} to={"/"}>
              <img
                alt="Atrium Studio Logo"
                src={String(logo)}
                className={"w-36 lg:w-48 p-[10px]"}
              />
            </Link>
            <div className={menuOpen ? "main-nav open" : "main-nav"}>
              <ul className="">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <span>Services</span>
                  <ul className={"sub-menu"}>
                    <li>
                      <NavLink to={"/services/home-staging"}>
                        Home Staging
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/services/furnish-and-style"}>
                        Furnish and Style
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/services/vacation-rental"}>
                        Vacation Rental
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/portfolio"}>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact us</NavLink>
                </li>
                <li>
                  <NavLink to={"/get-a-quote"}>Get a quote</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={className}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setClassName(!menuOpen ? "icon-menu active" : "icon-menu");
            }}
          >
            <span></span>
          </div>
        </nav>
      </header>
    </div>
  );
};
