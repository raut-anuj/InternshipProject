import React from "react";
import NameCard from "./NameCard";
 
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
    <div className="photo-slider">
      <section className="slider-section">
        <h2 className="text-style">Trusted by Leading Brands</h2>
        <div className="separator"></div>

        <div className="slider-fade">
          <div className="slider-fade marquee-track">
            <div className="logo">
              {logos.map((item, index) => (
                <NameCard key={`set1-${index}`} src={item.src} />
              ))}
            </div>

            <div className="logo">
              {logos.map((item, index) => (
                <NameCard key={`set2-${index}`} src={item.src} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
