import React from "react";
import { Image } from "react-bootstrap";

export default function BrandSlider() {
  const logos = [
  { src: "/image/deloitte.png" },
  { src: "/image/icici.png" },
  { src: "/image/johnson.png" },
  { src: "/image/mahindra.png" },
  { src: "/image/mercede.png" },  
  { src: "/image/paper.png" },
  { src: "/image/union.png" },
];

const renderNameCard = ({ src, key }) => (
  <div className="logo-card" key={key}>
    <Image className="logo-img" src={src} draggable={false} />
  </div>
);

  return (
    
    <div className="photo-slider">
      <section className="slider-section">
        <h2 className="text-style">Trusted by Leading Brands</h2>
        <div className="separator"></div>

        <div className="slider-fade">
          <div className="slider-fade marquee-track">
            <div className="logo">
              {logos.map((item, index) =>
                renderNameCard({
                  src: item.src,
                  key: `set1-${index}`,
                }),
              )}
            </div>

            <div className="logo">
              {logos.map((item, index) =>
                renderNameCard({
                  src: item.src,
                  key: `set1-${index}`,
                }),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
