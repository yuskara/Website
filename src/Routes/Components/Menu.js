import React,{ useState } from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  const [toggle, setToggle] = useState(false);
  // const onClick = e => {
  //   e.preventDefault();
  //   setToggle(!false);
  // };

  return (
   <>
      <nav className="nav-gen-menu">
        <h1>dsdsdsdsd</h1>
        <ul className="nav-links">
          <li><Link to='/'>Home<img src="" alt=""/></Link></li>
          <li><Link to='/'>About us<img src="" alt="" /></Link></li>
          <li><Link to='/'>Services<img src="" alt="" /></Link></li>
          <li><Link to='/'>Work<img src="" alt="" /></Link></li>
          <li><Link to='/'>Contact<img src="" alt="" /></Link></li>
        </ul>
        <button className="nav-button" onClick={()=>setToggle(!toggle)}>
            <span />
            <span className= {toggle ? "nav-button-span":""}/>
            <span />
        </button>
      </nav>
      <div className={toggle? "nav-sidebar-active":"nav-sidebar"}>
        <ul className={toggle ? "nav-sidebar-links nav-links":""}>
          <li><Link to='/'>Home<img src="" alt=""/></Link></li>
          <li><Link to='/'>About us<img src="" alt="" /></Link></li>
          <li><Link to='/'>Services<img src="" alt="" /></Link></li>
          <li><Link to='/'>Work<img src="" alt="" /></Link></li>
          <li><Link to='/'>Contact<img src="" alt="" /></Link></li>
        </ul>
      </div>
   </>
  );
};
export default Menu;