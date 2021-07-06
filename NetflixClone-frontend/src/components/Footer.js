import React from "react";
import "../assets/footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <p><a href="#">Questions? Call +080007999</a></p>
      
      <footer>
        <div className="col1">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Impressum</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="col2">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col3">
          <a href="#">Account</a>
          <a href="#">Redeem Gift Cards</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="col4">
          <a href="#">Media Center</a>
          <a href="#">Buy Gift Cards</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
      </footer>
<<<<<<< HEAD
      <select class="selectpicker" data-width="fit">
    <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
  <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
  <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Arabic</option>
</select>
 <p className="netflix-germany">Netflix Germany</p>

=======
      <select className="selectpicker" data-width="fit">
        <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
          English
        </option>
        <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
          Español
        </option>
      </select>
      <p>Netflix Germany</p>
>>>>>>> 9359fb91ecccd67a6987678c24133df038ee4073
    </div>
  );
}
