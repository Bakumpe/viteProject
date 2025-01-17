import React from "react";
import Play from '../assets/play.png';
import '../App.css';

function Header() {
  return (
    <header>
      <img src={Play} alt="play" className="logo"/>

      <nav className="nav">
        <p>About</p>
        <p>Project</p>
        <p>Contact</p>
      </nav> 
    </header>
  );
}

export default Header;
