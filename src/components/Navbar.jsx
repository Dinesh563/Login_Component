import React from "react";
import "../styles/navbar.css"
import logo from '../logo.svg';


export default function Navbar() {
    return < div className="navbar">
        <img src={logo} alt="React Logo" />
        
        <div className="navbar-main">
        <span> Home </span>
        <span> Plans</span>
        <span> Pricing</span>
        <button className="nav-button nav-login"> Login </button>
        <button className="nav-button nav-signup"> Signup </button>
        </div>
    </div >
}