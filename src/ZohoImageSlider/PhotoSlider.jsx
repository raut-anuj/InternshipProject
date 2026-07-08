import React from "react";
import NameCard from "./NameCard";
import "./slider.css";

const logos = [
  { src: "/image/deloitte.png" },
  { src: "/image/icici.png" },
  { src: "/image/johnson.png" },
  { src: "/image/mahindra.png" },
  { src: "/image/mercede.png" },
  { src: "/image/paper.png" },
  { src: "/image/union.png" },
];

export default function PhotoSlider() {
  return (
    <section className="slider-section">
      <h2 className="text-section">Trusted by Leading Brands</h2>
              <div className="title-line"></div>

      <div className="slider-fade-wrapper">
        <div className="marquee-track">
          <div className="logos-set">
            {logos.map((item, index) => (
              <NameCard key={`set1-${index}`} src={item.src} />
            ))}
          </div>

          <div className="logos-set">
            {logos.map((item, index) => (
              <NameCard key={`set2-${index}`} src={item.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
