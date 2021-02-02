import React from 'react';
import "../../../css/ResHeader.css";
import logo from "../../../imgs/footer_logo.png";

function Header() {
  return (
    <div id="header_id" className="home_header">
    <div className="tm-top-header">
    <div className="container">
      <div className="row">
        <div className="tm-top-header-inner">
          <div className="tm-logo-container">
            <img src={logo} alt="Logo" className="tm-site-logo" />
            <h1 className="tm-site-name tm-handwriting-font">Amnick</h1>
          </div>
     
          <nav className="tm-nav">
            <ul>
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="today-special.html">Today Special</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>   
        </div>           
      </div>    
    </div>
    </div>
  </div>
  );
}

export default Header;
