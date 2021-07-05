import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/Nav.scss'

export default function Navbar() {
    const [show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return () =>{
            window.removeEventListener("scroll")
        }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`} >
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
            
    )
}

