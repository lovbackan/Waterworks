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
      srcset={`${HeroWaterWorks_mobile} 360w, ${HeroWaterWorks_large_device} 768w, ${HeroWaterWorks_large_tablet} 1200w, ${HeroWaterWorks_desktop} 1920w`}
      src={HeroWaterWorks_mobile}
      sizes="(max-width: 360px) 360px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px"
      alt="the Mölndal Rapids"
    />
  );
}

function HeroSection() {
  return (
    <section className="Hero-section">
      <div className="Hero-image-container">{ResponsiveImage()}</div>
    </section>
  );
}

export default HeroSection;
