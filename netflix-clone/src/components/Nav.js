import React, { useEffect, useState } from 'react'
// import style
import './Nav.css';

const Nav = () => {
 const[show, setShow] = useState(false);

 useEffect(() => {
  window.addEventListener("scroll", () => {
   if(window.screenY > 100) {
    setShow(true);
   } else {
    setShow(false);
   }
  });
  return () => {
   window.removeEventListener("scroll");
  };
 }, []);
 return (
  <div className={`nav ${show && "nav__black"}`}>
   {/* Logo */}
   <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
   {/* Twimg */}
   
  </div>
 )
}

export default Nav
