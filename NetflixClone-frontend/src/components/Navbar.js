import React from "react";
import "../assets/Nav.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav" style={{ zIndex: "1000" }}>
      <div className="nav_logo">
        <Link to="/movies"></Link>
      </div>
      <div className="navBtnBox">
        <Link to="/login">
          <button className="navBtn">
            <span>Log in</span>
          </button>
        </Link>
      </div>

      <div className="nav_avatar">
        <Link to="/profile"></Link>
      </div>
    </div>
  );
}
