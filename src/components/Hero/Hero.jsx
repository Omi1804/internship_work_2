import React from "react";
import img from "../../assets/hero_icon.png";
import img2 from "../../assets/white_rec.png";
import img3 from "../../assets/purple_cir.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero">
        <div className="hero_content">
          <div className="hero_description">
            <h1>
              Tailored digital marketing services to boost
              <span className="target"> Online Presence</span>
            </h1>
            <p>
              Digital marketing agency offering strategies and services to boost
              businesses' online presence and achieve goals.
            </p>
          </div>
          <button className="button">Let's get started</button>
        </div>
        <div className="hero_images">
          <img src={img} alt="" className="hero_icon" />
          <div className="collections">
            <img className="white_bg" src={img2} alt="" />
            <img className="purple_cir" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
