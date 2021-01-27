import React from 'react';
import './StoreFooter.css';


function Footer() {
  return (
    <>
      <div class="store-footer-container">
        <div class="store-footer-links">
          <div class="store-footer-link-items">
            <h3>About Us</h3>
            <ul>
              <li><a href="#" class="store-footer-link">Online Shopping</a></li>
              <li><a href="#" class="store-footer-link">Shipping and Delivery</a></li>
              <li><a href="#" class="store-footer-link">My Orders</a></li>
              <li><a href="#" class="store-footer-link">See More</a></li>
            </ul>
          </div>
          <div class="store-footer-link-items">
            <h3>Legal Information</h3>
            <ul>
              <li><a href="#" class="store-footer-link">GDPR</a></li>
              <li><a href="#" class="store-footer-link">Terms and Condition</a></li>
              <li><a href="#" class="store-footer-link">Privacy Police</a></li>
              <li><a href="#" class="store-footer-link">Right of Withdrawal</a></li>
              <li><a href="#" class="store-footer-link">Cookie Settings</a></li>
            </ul>
          </div>

          <div class="store-footer-link-items">
                <h3>About</h3>
                <ul>
                  <li><a href="#" class="store-footer-link">About Us</a></li>
                  <li><a href="#" class="store-footer-link">Store Locator</a></li>
                  <li><a href="#" class="store-footer-link">All Stores</a></li>
                  <li><a href="#" class="store-footer-link">Press Contacts</a></li>
                  <li><a href="#" class="store-footer-link">Careers</a></li>
              </ul>
          </div>
          
          <div class="store-footer-social">
            <div class="store-footer-link-social">
              <h3>Social</h3>
              {/* <a href="#" class="footer-icon"><i class='bx bxl-facebook'></i></a> */}
              <a href="#" class="store-footer-icon"><i class="fab fa-facebook"></i></a>
              <a href="#" class="store-footer-icon"><i class='fab fa-twitter'></i></a>
              <a href="#" class="store-footer-icon"><i class='fab fa-instagram'></i></a>
              <a href="#" class="store-footer-icon"><i class='fab fa-youtube'></i></a>
            </div>

            <hr class="store-hr"></hr>

            <div class="store-footer-link-payment">
              <h3>Payment Methods</h3>
              <a href="#" class="store-footer-icon"><i class='fab fa-cc-visa'></i></a>
              <a href="#" class="store-footer-icon"><i class='fab fa-cc-mastercard'></i></a>
              <a href="#" class="store-footer-icon"><i class='fab fa-paypal'></i></a>
            </div>
          </div>
        </div>
      </div>
        {/* <a href="#" class="copyright">jall &nbsp; &nbsp; &copy; copyright 2021</a> */}
        <a href="#" class="store-copyright">&copy; {new Date().getFullYear()} JALL INC | All right reserved | Terms of Service | Privacy</a>
    </>
  );
}

export default Footer;