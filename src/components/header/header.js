import React from "react";
import "./header.css";
import Toggle from '../sidebar/toggle'
// import { HashLink as Link } from 'react-router-hash-link';


const Header = ({toggle,setToggle}) => {


  return (
    <div id="header" className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <a className="logo" href="#home">
            <img className="logo-img" src="images/programmer512px.png" alt="" />
            <p className="logo-text">
              Abhishek
              <br />
              Codes
            </p>
          </a>
        </div>
        <Toggle toggle={toggle} setToggle={setToggle}/>
        <nav  className="navigation-nav">
          <ul className="navigation-list">
            <li className="navigation-item">
              <a href="#about">About</a>
            </li>
            <li className="navigation-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="navigation-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-text-pri">Hello, I'm Abhishek</h1>
          <h2 className="hero-text-sub">A Front End Developer</h2>
        </div>
        <div className="hero-image-wrapper ">
          <img className="hero-image" src="images/coding.png" alt="" />
        </div>
      </div>
    </div>
  );

 
};



export default Header;
