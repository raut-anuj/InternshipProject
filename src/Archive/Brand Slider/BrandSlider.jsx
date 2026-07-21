import React from "react";
import { Image } from "react-bootstrap";
import "./slider.scss"

export default function BrandsSlider() {
const logos = [
  
  { src: "/image/deloitte.png" },
  { src: "/image/icici.png" },
  { src: "/image/johnson.png" },
  { src: "/image/mahindra.png" },
  { src: "/image/mercede.png" },
  { src: "/image/paper.png" },
  { src: "/image/union.png" },
]


  const timePerLogo = 2;
  const totalDuration = logos.length * timePerLogo;

  const renderNameCard = ({ src, key }) => (
    <div className="logo-card" key={key}>
      <Image className="logo-img" src={src} draggable={false} />
    </div>
  );

  return (
    <div className="brands-slider">
      <section className="slider-section">
        <h2 className="text-style">Trusted by Organizations</h2>
        <div className="separator"></div>
        <div className="slider-fade">
          <div 
            className="marquee-track" 
            style={{ "--animation-duration": `${totalDuration}s` }}
          >
            <div className="logo-set">
              {logos.map((item, index) =>
                renderNameCard({
                  src: item.src,
                  key: `set1-${index}`,
                }),
              )}
            </div>

            <div className="logo-set">
              {logos.map((item, index) =>
                renderNameCard({
                  src: item.src,
                  key: `set2-${index}`,
                }),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
