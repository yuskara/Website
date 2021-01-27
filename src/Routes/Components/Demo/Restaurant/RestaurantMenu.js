import React from "react";
import "../Restaurant/RestaurantStyles/Menu.css";
function Menu() {
    return (
        <nav className="rest_menu">
            <ul className="rest_menu-list" >
                <li><a href="#" className="rest_menu-link">Home</a></li>
                <li ><a href="#services" className="rest_menu-link">Services</a></li>
                <li><a href="#work" className="rest_menu-link">Work</a></li>
                <li><a href="#contact" className="rest_menu-link">Contact</a></li>
        </ul>
      </nav>
      );
  }
  
  export default Menu;