import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="nav-gen-menu">
      <ul className="nav-links">
        <li><Link to='/'>Home<img src="" alt="" /></Link></li>
        <li><Link to='/'>About us<img src="" alt="" /></Link></li>
        <li><Link to='/'>Services<img src="" alt="" /></Link></li>
        <li><Link to='/'>Work<img src="" alt="" /></Link></li>
        <li><Link to='/'>Contact<img src="" alt="" /></Link></li>
      </ul>
    </nav>
  );
}
export default Menu;