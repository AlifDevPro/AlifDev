"use server";

import React from "react";
import Image from "next/image";
import "./home.css";
import Link from "next/link";

import SliderIcon from "../../../public/asset/slider-icon.svg";
import homeBg from "../../../public/asset/bg-design.svg";
import dot from "../../../public/asset/dot.svg";
import HeadingAnimation from "../../client-component/type-animation/heading-animation";
import SocialIcon from "../../client-component/social-icons/social-icon";
import { MdReadMore } from "react-icons/md";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="container">
          <div className="slider-info">
            <div className="description">
              <h1>
                <span>Professional Extraordinaire MERN Stack </span>{" "}
                <span>
                  <HeadingAnimation />
                </span>
              </h1>
              <p>
                As a skilled Full Stack Web Developer with expertise in the MERN
                stack and diverse technologies, I deliver innovative solutions
              </p>
            </div>
            <div className="slider-buttons">
              <Link
                className="secondary-button active:scale-95 transition"
                href="/"
              >
                Hire Me
              </Link>
              <Link className="primary-button active:scale-95 transition" href="/">
                <span>Project</span>
                <MdReadMore />
              </Link>
            </div>
          </div>
          <div className="slider-icon">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png"
              alt="slider"
              width={1200}
              height={800}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="social-icon">
          <Link
            href="https://stackoverflow.com/users/21634507/alif-ahmed"
            target="_blank"
          >
            <SocialIcon classId="social hover:scale-105 hover-rotate-360 hover:bg-blue-800 hover:fill-white transition" name="stack-overflow" />
          </Link>
          <Link href="https://www.facebook.com/alif.ahmed.dev/" target="_blank">
            <SocialIcon classId="social hover:scale-105 hover-rotate-360 hover:bg-blue-800 hover:fill-white transition" name="facebook" />
          </Link>
          <Link href="https://medium.com/@alif.dev.design" target="_blank">
            <SocialIcon classId="social hover:scale-105 hover-rotate-360 hover:bg-blue-800 hover:fill-white transition" name="medium" />
          </Link>
          <Link href="" target="_blank">
            <SocialIcon classId="social hover:scale-105 hover-rotate-360 hover:bg-blue-800 hover:fill-white transition" name="linkedin" />
          </Link>
          <Link href="https://twitter.com/AlifAhmedDev" target="_blank">
            <SocialIcon classId="social hover:scale-105 hover-rotate-360 hover:bg-blue-800 hover:fill-white transition" name="twitter" />
          </Link>
          <Link href="https://github.com/AlifAhmed24/" target="_blank">
            <SocialIcon classId="social hover:scale-105 hover-rotate-360 hover:bg-blue-800 hover:fill-white transition" name="github" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
