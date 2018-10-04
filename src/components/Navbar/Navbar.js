import React from "react";
import "./Navbar.css";

const Navbar = props => (


  <div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="game-message navbar-text">{props.message}</span>
            <span className="navbar-text">Score: {props.score}  |  Top Score: {props.topScore}</span>
    </nav>
    </div>
  
);

export default Navbar;
