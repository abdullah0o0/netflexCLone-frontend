import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/Nav.scss";
import MyContext from "../context/MyContext";

export default function Navbar() {
  const { setIsLogin } = useContext(MyContext);

  const history = useHistory();

  const xAuth = localStorage.getItem("x-auth");

  // console.log(isLogin);

  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_logo">
        <Link to="/movies"></Link>
      </div>
      <div className="navBtnBox">
        {xAuth ? (
          <>
            <Link>
              <button
                onClick={() => {
                  localStorage.clear();
                  setIsLogin(false);
                  history.push("/");
                  console.log("user logged out");
                  window.location.reload();
                }}
                className="navBtn"
              >
                <span>Log out</span>
              </button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button className="navBtn">
              <span>Log in</span>
            </button>
          </Link>
        )}
      </div>
      <div className="nav_avatar">
        <Link to="/profile"></Link>
      </div>
    </div>
  );
}
