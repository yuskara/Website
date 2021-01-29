import React from "react";
import "../../../css/ResMenu.css";
import logo_img from './imgs/rest_logo.png';

function Menu() {
    return (
        <nav className="rest_menu">
            <ul className="rest_menu-list" >
                <img src={logo_img} className="rest_logo" alt="logo"/>
                <li><a href="#" className="rest_menu-link">Home</a></li>
                <li ><a href="#" className="rest_menu-link">About</a></li>
                <li><a href="#" className="rest_menu-link">Gallery</a></li>
                <li><a href="#" className="rest_menu-link">Reservations</a>
                    <ul className="rest_menu_dropdown">
                        <li><a href="#">Sub-1</a></li>
                        <li><a href="#">Sub-2</a></li>
                        <li><a href="#">Sub-3</a></li>
                    </ul>
                </li>
                <li><a href="#" className="rest_menu-link">Contact</a></li>
        </ul>
      </nav>
      );
  }
  
  export default Menu;