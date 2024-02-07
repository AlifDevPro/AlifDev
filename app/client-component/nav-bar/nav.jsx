"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import SocialIcon from "../social-icons/social-icon";

function Navbar() {
  const [scroll, setScroll] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef();
  const sidebarRef = useRef();

  const menuClick = () => {
    if (!isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  //handleing nav scrolling
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <nav
      className={`nav transition-all ${
        scroll > 0 ? "bg-white py-6 border-b" : "py-10"
      }`}
      id="home"
    >
      <div className="container">
        <div className="logo">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-menu">
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Project</Link>
          <Link href="#reviews">Reviews</Link>
        </div>
        <div className="cta divide-x-2 flex items-center gap-4">
          <Link href="/" className="contact-button  active:scale-95 transition ">
            Download CV
          </Link>
          <Link href="/" className="contact-button  active:scale-95 transition bg-[#2424de] text-white  py-3 px-6 rounded-2xl">
            Contact
          </Link>
          <span className="menu-icon-wrapper" onClick={menuClick} ref={menuRef}>
            <MenuIcon className="menu-icon" />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
