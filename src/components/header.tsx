'use client'
import { useState } from "react";
import React from 'react'
import { IoMenu } from "react-icons/io5";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>{
      setIsOpen(!isOpen);
    };
  return (
    <div>
              {/* Header */}
      <header className="header">
        <div className="logo">Komal Abbasi</div>
        <nav className={`nav ${isOpen ? "open" : ""}`} >
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact me</a></li>
          </ul>
        </nav>
        <button className="hire-btn">Hire me</button>
        <div className="burger-icon" onClick={toggleMenu}> <IoMenu /></div>
      </header>
      {isOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact me</a></li>
          </ul>
        </nav>
      )}

    </div>
  )
}

export default Header