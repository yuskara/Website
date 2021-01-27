import React from 'react';
import './Storemenu.css';

function Toggle(){
  return(
    <>
      <input type="checkbox" id='check'/>
      <label htmlFor="check" className='checkbtn'>&#9776;</label>
    </>
  )
}

function TextMenu(){
    return(
      <>
        <Toggle />
        <ul id="content">
            <li className="text"><a href="#">MEN</a></li>
            <li className="text"><a href="#">WOMEN</a></li>
            <li className="text"><a href="#"> KIDS</a></li>
            <li className="text"><a href="#"> NEW</a></li>
            <li className="text"><a href="#"> BRANDS</a></li>
            <li className="text"><a href="#"> COLLECTIONS</a></li>
            <li className="text"><a href="#"> RELEASES</a></li>
            <li className="text"><a href="#"> SALE</a></li>
        </ul>
      </>
    )
}

function Logo(){
  return(
      <div id='logo'>
          <img src='https://wpsites.net/wp-content/uploads/2013/08/new-logo.png' width="140px" height="50px" />
      </div>
  )
}

function Right(){
  return(
      <div id='right'>
          <form action="" className='formSearch'>
            <i class="fas fa-search"><input type="text" className='search' placeholder='Search'/></i>
            {/* <i class="fas fa-search"><input type="text" className='search' placeholder='Search'/></i> */}
            {/* <button className='search'>🍳</button> */}
          </form>
          <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/white-heart_1f90d.png' className='myImg1'/>
          <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/274/shopping-cart_1f6d2.png' className='myImg2'/>
      </div>
  )
}

function Login(){
  return(
      <div id="loginClient">
          <span className='signing'>Sign In / Register</span>
          <span className="client">Customer Service</span>
      </div>
  )
}

function Menu() {
  return (
    <div id="logMenu">
      <Login />
      <nav className="storeMenu">
          <Logo />
          <TextMenu />
          <Right />
      </nav>
    </div>
  );
}

export default Menu;