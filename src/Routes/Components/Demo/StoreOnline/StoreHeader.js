import React from 'react';
import './Storeheader.css';
import OwlCarousel from "react-owl-carousel3";

function ShiftHeader() {
  const responsive={
    0:{
        items:1
    }
}
  return (
    <div className='headerContent'>
        <OwlCarousel 
            className="owl-theme"
            loop  dotsContainer={false} dots={false} autoplay smartSpeed={1500} dots={true}  nav responsive={responsive}
        >
              <HeaderCard src='https://boohooamplience.a.bigcontent.io/v1/static/210121_PROMO_UK_UPTO70_5861_V3_DESK?$homesplash_desktop_full_1x$' 
                    alt='mode1'/>
              <HeaderCard src='https://media.boohoo.com/i/boohooamplience/1901_MAIN_SPLASH_TRANSCEND_DESKTOP_EN?$homesplash_desktop_full_1x$'
                alt='mode2'/>
              <HeaderCard src='https://media.boohoo.com/i/boohooamplience/KNITWEAR_DESK_2201?$homesplash_desktop_full_1x$' 
                alt='mode3'/>
        </OwlCarousel>
    </div>
  );
}

function Extra(){
  return(
    <div className='extra'>

    </div>
  )
}

function HeaderCard({src, alt}){
  return(
          <a href='#' className='headerCard'> 
            <div className='headerImg'>
                <img src={src} alt={alt} />
            </div> 
        </a>
  )
}

function Header() {
  return (
     <ShiftHeader />
  );
}

export default Header;