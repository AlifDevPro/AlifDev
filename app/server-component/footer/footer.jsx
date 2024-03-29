'use client'

import React, {useEffect, useState} from "react";
import Link from "next/link";
import './footer.css'

//social icons imports
import { FaLinkedinIn, FaTwitter, FaStackOverflow, FaGithub,FaMediumM } from "react-icons/fa";

function Footer() {
  const [year, setYear] = useState();
  
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYear(year)
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <div className="footerWrapper">
        <div className="footerHeading">
          <div className="logo">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>Alif Ahmed</h1>
          <p>PROFESSIONAL FULL STACK WEB <br /> <span>DEVELOPER</span> AND <span>DESIGNER</span></p>
          <Link href="/">Hire me</Link>
        </div>
        <div className="footerNavigate section">
            <h2 className="naviagteHeader">Navigate</h2>
            <div className="navigateBody">
              <Link href="#home">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Project</Link>
              <Link href="#reviews">Reviews</Link>
            </div>
        </div>
        <div className="footerConnect section">
            <h2 className="connectHeader">Connect With Me</h2>
            <div className="connectBody">
                <Link href='/'>
                <FaLinkedinIn />
                <span>Linkedin</span>
                </Link>
                <Link href='https://twitter.com/AlifAhmedDev' target='_blank'>
                <FaTwitter />
                <span>Twitter</span>
                </Link>
                <Link href='https://stackoverflow.com/users/21634507/alif-ahmed' target='_blank'>
                <FaStackOverflow />
                <span>Stack Overflow</span>
                </Link>
                <Link href='https://github.com/AlifAhmed24' target='_blank'>
                <FaGithub />
                <span>Github</span>
                </Link>
                <Link href='https://medium.com/@alif.dev.design' target='_blank'>
                <FaMediumM />
                <span>Medium</span>
                </Link>
            </div>    
        </div>      
        <div className="footerContact section">
            <h2 className="contactHeader">Contact</h2>
            <div className="contactBody">
                <Link  href="mailto:example@example.com">
                <box-icon className='gmail' name='gmail' type='logo'></box-icon>
                <span>Mail</span>
                </Link>
                <Link href='https://twitter.com/AlifAhmedDev' target='_blank'>
                <box-icon className='twitter' name='twitter' type='logo'></box-icon>
                <span>Twitter</span>
                </Link>
                <Link href='/'>
                <box-icon className='whatsapp' name='whatsapp' type='logo'></box-icon>
                <span>Whatsapp</span>
                </Link>
                <Link href='/'>
                <box-icon className='telegram' name='telegram' type='logo'></box-icon>
                <span>Telegram</span>
                </Link>
            </div>
        </div>  
        </div>
        <div className="copyrightWrapper">
          <span>&copy; {year} Alif. All rights reserved</span>
          <span>Designed and developed by Alif</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
