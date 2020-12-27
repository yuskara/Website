import React from 'react';
import footer_img from '../imgs/footer_logo.png';
import facebook from '../imgs/facebook.png';
import instagram from '../imgs/instagram.jpg';
import twitter from '../imgs/twitter.jpg';
import youtube from '../imgs/youtube.jpg' ;
import phone from '../imgs/phone.jpg';
import mail from '../imgs/mail.jpg';

function Footer() {
    return (
        <div class="div-footer">
            <div class="inner_footer">
                <div class="logo_container">
                    <a href="#" ><img src={footer_img} alt="logo" ></img></a>
                    
                    <div class="socials">
                        <br></br>
                        <a href="#"><img src={facebook} alt='facebook' ></img></a>
                        <a href="#"><img src={instagram}alt='instagram' ></img></a>
                        <a href="#"><img src={twitter} alt='twitter' ></img></a>
                        <a href="#"><img src={youtube} alt='youtube' ></img></a>
                    </div>
                </div>

                <div class="footer_third">
                    <h1 class="logo-text"><span>YuKa </span> Center</h1>
                    <p>we help lienholders and law firms
                            work better together.      </p>
                
                    <div class="contact">
                        <span><img src={phone}alt='phone'></img>&nbsp;+30 6988083143</span><br></br>
                        <span><img src={mail}alt='mail'></img>&nbsp;info@yuka.com</span>
                    </div>
                    
                </div>
                <div class="footer_third">
                    <h2>Quick Links</h2>
                    
                    <ul>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Services</li></a>
                        <a href="#"><li>Gallery</li></a>
                        <a href="#"><li>Terms</li></a>
                    </ul>
                </div>    
            </div>
            
            <div class="footer-bottom">
                <h5> &copy;2020 yuka.com | Designed by YuKa </h5>
            </div>
        </div>
    );
}

export default Footer;