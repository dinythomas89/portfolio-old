import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container" id="header">
      <div className="logo">
        <a href="#header">&#119915;&#119879;</a>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
