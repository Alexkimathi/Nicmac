import React from "react";
import "./navbar.css";
import logo from "../../img/logo.png";

import { MdEmail, MdOutlinePhoneIphone, MdLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="contact">
          <ul className="contacts">
            <li>
              <MdOutlinePhoneIphone /> 0722 683 026 |0723 957 839| 0790 492 801{" "}
            </li>
            <li>
              {" "}
              <MdEmail /> nicmac@mail.com
            </li>
            <li>
              {" "}
              <MdLocationOn /> Nicmac Holding Limited P.O. Box 1944-00621
              Village Market
            </li>
          </ul>
        </div>
        <div className="social">
          <ul className="socials">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_linkss">
        <img src={logo} alt="logo" className="lg" />
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              AboutUs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Properties
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Resourses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        
        <div className="nav_btn">
          <button className="btn" >view Property</button>
          <button className="btn">Diaspora</button>
        </div>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
