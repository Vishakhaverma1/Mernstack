
import React,{ useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  
    const showMenu = () => { // Function to show navigation menu
      navLinks.style.right = "0"
        console.log("Menu is shown");
    };

    const hideMenu = () => { // Function to hide navigation menu
      navLinks.style.right = "-200px"
      console.log("Menu is hidden");
    };
  return (
    <>
      <nav>
                <a href="index2.html"><img id="logo" src="image/Edusahyogi .jpg" /></a>
                <div  className="nav-links" id="navLinks">
                    <i className="fa-solid fa-xmark" onClick={hideMenu}></i>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <i className="fa-solid fa-bars" onClick={showMenu}></i>
            </nav>
    </>
  )
}

export default Navbar
