import React,{ useState } from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  const [isClicked, setisClicked] = useState(false);
  return (
    <nav className="nav-gen-menu">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
      <ul className="nav-links">
        <li><Link to='/'>Home<img src="" alt=""/></Link></li>
        <li><Link to='/'>About us<img src="" alt="" /></Link></li>
        <li><Link to='/'>Services<img src="" alt="" /></Link></li>
        <li><Link to='/'>Work<img src="" alt="" /></Link></li>
        <li><Link to='/'>Contact<img src="" alt="" /></Link></li>
      </ul>
    </nav>
  );
}
export default Menu;