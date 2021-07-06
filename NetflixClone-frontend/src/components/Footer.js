import React from "react";
import "../assets/Footer.scss";
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    
    <div className="footer-div">
      <IconContext.Provider value=
      {{className: "mediaStyles" }}>
       <div className="socialMedia">
         
         <a href="https://www.facebook.com/NetflixDACH"  aria-label="facebook"><FaFacebook /></a>
         <a href="https://www.instagram.com/NetflixDE"  aria-label="instagram"><FaInstagram /></a>
         <a href="https://twitter.com/NetflixDE"  aria-label="twitter"><FaTwitter /></a>
         <a href="https://www.youtube.com/user/netflixdach"  aria-label="youtube"><FaYoutube /></a>
       
       </div>
      </IconContext.Provider>

      <footer>
        <div className="col1">
          <a href="/#">FAQ</a>
          <a href="/#">Investor Relations</a>
          <a href="/#">Ways to Watch</a>
          <a href="/#">Impressum</a>
          <a href="/#">Only on Netflix</a>
        </div>
        <div className="col2">
          <a href="/#">Help Center</a>
          <a href="/#">Jobs</a>
          <a href="/#">Terms of Use</a>
          <a href="/#">Contact Us</a>
        </div>
        <div className="col3">
          <a href="/#">Account</a>
          <a href="/#">Redeem Gift Cards</a>
          <a href="/#">Privacy</a>
          <a href="/#">Speed Test</a>
        </div>
        <div className="col4">
          <a href="/#">Media Center</a>
          <a href="/#">Buy Gift Cards</a>
          <a href="/#">Cookie Preferences</a>
          <a href="/#">Legal Notices</a>
        </div>
        
      </footer>
      <span>‎© 1997-2021 Netflix, Inc.‎‎</span>
    </div>
  );
}
