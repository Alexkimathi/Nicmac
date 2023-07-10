import React from "react";
import "./about.css";
import image1 from "../../img/21.png";
import image2 from "../../img/22.png";
import image3 from "../../img/23.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <h1 className="heading">Our Main Focus</h1>
    <div className="about">
        
      <div className="card">
        <img src={image1} alt="Denim Jeans" />
        <h1>RESIDENTIAL PROPERTIES</h1>
        <p>
          NicMac Ventures help you find the home of your dreams within the
          Kenyan territory where you can build a home.
        </p>
        <Link className="card_link">View More</Link>
      </div>
      <div className="card">
        <img src={image2} alt="Denim Jeans" />
        <h1>COMMERCIAL PROPERTIES</h1>
        <p>
        Commercial property usually refers to land used to generate a profit, as well as large residential rental properties.
        </p>
        <Link className="card_link">View More</Link>
      </div>
      <div className="card">
        <img src={image3} alt="Denim Jeans" />
        <h1>DIASPORA CLIENTS</h1>
        <p>
        NicMac Ventures help you find the home of your dreams within the
          Kenyan territory where you can build a home.
        </p>
        <Link className="card_link">View More</Link>
      </div>
    </div>
    </>
  );
}

export default About;
