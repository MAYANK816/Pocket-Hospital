import React from 'react';
import './Footer.css';

const Footer = () => {
  return <>
  <div class="section_footer ">
      <div class="container"> 
          <div class="footer_section_2">
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <h2 class="account_text">Address</h2>
                  <p class="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <h2 class="account_text">Links</h2>
                  <div class="image-icon"><img src="images/bulit-icon.png" alt="img_"/><span class="fb_text"><a href="djfhjhd">Home</a></span></div>
                <div class="image-icon"><img src="images/bulit-icon.png" alt="img_"/><span class="fb_text"><a href="djfhjhd">About Us</a></span></div>
                <div class="image-icon"><img src="images/bulit-icon.png"alt="img_"/><span class="fb_text"><a href="djfhjhdchat_box">Contact Us</a></span></div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                <h2 class="account_text">Follow Us</h2>
                <div class="image-icon"><img src="images/fb-icon.png"alt="img_"/><span class="fb_text"><a href="sd">Facebook</a></span></div>
                <div class="image-icon"><img src="images/twitter-icon.png"alt="img_"/><span class="fb_text"><a href="df">Twitter</a></span></div>
                <div class="image-icon"><img src="images/in-icon.png"alt="img_"/><span class="fb_text"><a href="df">Linkedin</a></span></div>
                <div class="image-icon"><img src="images/youtube-icon.png"alt="img_"/><span class="fb_text"><a href="df">Youtube</a></span></div>            
                <div class="image-icon"><img src="images/instagram-icon.png"alt="img_"/><span class="fb_text"><a href="df">Instagram</a></span></div>
                </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <h2 class="adderess_text">Newsletter</h2>
            <input type="" class="email_text" placeholder="Enter Your Email" name="Enter Your Email"/>
            <button class="subscribr_bt">SUBSCRIBE</button>
          </div>
          </div>
          </div>
          </div>
      </div>
  </>
  ;
};

export default Footer;
