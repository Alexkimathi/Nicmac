import React from 'react'
import logo from "../../img/logo.png";
import './footer.css'
import { MdEmail, MdOutlinePhoneIphone, MdLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Footer() {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className='footer'>
        
        <div className='footer-sec-1'>
        <img src={logo} alt="logo" className="lg-1" />
        <p className='footer-desc'>NicMac Ventures Ltd is an investment vehicle for Ventures members, non-members and customers with shareholding open to individuals, registered groups, sole proprietorships, partnerships and limited companies.</p>

        </div>
        <div className='footer-sect-2'>
            <div>
                <h1>NicMac</h1>
                <div className="footer-contact">
          <ul className="footer-contacts">
            <li>
              <MdOutlinePhoneIphone className='icons'/> 0722 683 026 |0723 957 839| 0790 492 801{" "}
            </li>
            <li>
              {" "}
              <MdEmail className='icons' /> nicmac@mail.com
            </li>
            <li>
              {" "}
              <MdLocationOn className='icons' /> Nicmac Holding Limited P.O. Box 1944-00621
              Village Market
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul className="footer-socials">
            <li>
              <FaFacebookSquare  className='iconss'/>
            </li>
            <li>
              <FaTwitter className='iconss' />
            </li>
            <li>
              <FaInstagram className='iconss' />
            </li>
          </ul>
        </div>
            </div>

        </div>

        <div className='footer-sect-3'>
            <h1>Resourses</h1>
            <ul>
            <li className="footer-nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="footer-nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="footer-nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="footer-nav-links"
              onClick={handleClick}
            >
              AboutUs
            </NavLink>
          </li>
          <li className="footer-nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="footer-nav-links"
              onClick={handleClick}
            >
              Properties
            </NavLink>
          </li>
          <li className="footer-nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="footer-nav-links"
              onClick={handleClick}
            >
              Resourses
            </NavLink>
          </li>
          <li className="footer-nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="footer-nav-links"
              onClick={handleClick}
            >
              Contacts
            </NavLink>
          </li>
            </ul>

        </div>

    </div>
  )
}

export default Footer