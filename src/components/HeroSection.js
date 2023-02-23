import React from "react";
import "../Hero.css";

import HeroWaterWorks_desktop from "../assets/HeroWaterWorks_desktop_1920px.png";
import HeroWaterWorks_large_tablet from "../assets/HeroWaterWorks_large_tablet_1200px.png";
import HeroWaterWorks_large_device from "../assets/HeroWaterWorks_large_device_768px.png";
import HeroWaterWorks_mobile from "../assets/HeroWaterWorks_mobile_360px.png";

function ResponsiveImage() {
  return (
    <img
      className="Hero-image"
      srcSet={`${HeroWaterWorks_mobile} 360w, ${HeroWaterWorks_large_device} 768w, ${HeroWaterWorks_large_tablet} 1200w, ${HeroWaterWorks_desktop} 1920w`}
      src={HeroWaterWorks_mobile}
      sizes="(max-width: 360px) 360px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px"
      alt="the Mölndal Rapids"
    />
  );
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

function HeroSection() {
  return (
    <section className="Hero-section">
      <div className="Hero-image-container">
        {ResponsiveImage()}
        <div className="Hero-image-text-container">
          <div className="Hero-text">
            <h1>Welcome to Fors!</h1>
            <h1>Your data source</h1>
            <h1>for Mölndalsån</h1>
          </div>
        </div>
        <div className="Hero-button" onClick={scrollToBottom}>
          Start
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
