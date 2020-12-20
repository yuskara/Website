import React from 'react';
import footer_img from '../imgs/logo_amnick.png';


function Footer() {
  return (
  <div class="footer">
    <div class="inner_footer">

        <div class="logo_container">
            <a href="#" ><img src={footer_img} alt="logo" ></img></a>
            
            <div class="socials">
                <br></br>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a> 
             </div>
        </div>

        <div class="footer_third">
            <h1 class="logo-text"><span>YuKa </span> Center</h1>
            <p>Lorem ipsum dolor <br></br>sit amet  consectetur</p>
        
            <div class="contact">
                <br></br>
                <span><i class="fas fa-phone"></i>&nbsp;+30 6988083143</span><br></br>
                <span><i class="fas fa-envelope"></i>&nbsp;info@yuka.com</span>
            </div>
            
        </div>
        <div class="footer_third">
            <h2>Quick Links</h2>
            <br></br>
            <ul>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Services</li></a>
                <a href="#"><li>Gallery</li></a>
                <a href="#"><li>Terms</li></a>
            </ul>
        </div>    
        <div class="footer_third">
            <h2>Contact us</h2>
            
                <form action="index.html" method="POST" class="contact_form" >
                
                      
                    <input type="email" name="email" class="contact-input" placeholder="Your email address..."></input>
                    <textarea name="message" class="text-input" placeholder="Your message..."></textarea>
                    <button type="submit" class="contact-btn">
                    <i class="fas fa-envelope"></i>Send </button>
                
            </form>
        </div>
    </div>

        <div class="footer-bottom">
            &copy;2020 yuka.com | Designed by YuKa 
        </div>
</div>
  );
}

export default Footer;