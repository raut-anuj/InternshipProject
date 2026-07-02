import React from "react";
import NameCard from "./NameCard";
import "./slider.css"; // 👈 Apni CSS file ko yahan import zaroor karna

const logos = [
  "/image/deloitte.png", "/image/icici.png", "/image/johnson.png", 
  "/image/mahindra.png", "/image/mercede.png", "/image/paper.png", "/image/union.png"
];

export default function PhotoSlider() {
  const items = [...logos, ...logos];

  return (
    <section className="slider-section">
      <div className="slider-fade-wrapper">
        <div className="marquee-track">
          {items.map((item, i) => (
            <NameCard key={i} src={item} />
          ))}
        </div>
      </div>
    </section>
  );
}