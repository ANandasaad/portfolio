import React from "react";
import "./Navbar/Navbar.scss";
import { images } from "../contants";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className="app_navbar">
        <div className="app_navbar-logo">

        
       <h1 className="logo">Anand</h1>
        </div>
     
      <ul className="app_navbar-links">
        {["home", "about", "work", "Skills", "contact"].map((item) => (
          <li className="app_flex p-text" key={item}>
     <div><a href={`#${item}`}>{item}</a></div>
          </li>
        ))}
       
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
