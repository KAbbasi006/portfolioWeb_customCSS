'use client'
import Link from "next/link";
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
          </ul>
        </nav>
        <button className="hire-btn">Hire me</button>
        <div className="burger-icon" onClick={toggleMenu}> <IoMenu /></div>
      </header>
      {isOpen && (
        <nav className="mobile-nav">
          <ul>
          <li><Link href="/">Home</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
          </ul>
        </nav>
      )}

    </div>
  )
}

export default Header