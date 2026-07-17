import React from "react";
import { Image } from "react-bootstrap";

export default function BrandsSlider() {
const logos = [
  // { src: "/image/deloitte.png" },
  // { src: "/image/icici.png" },
  // { src: "/image/johnson.png" },
  // { src: "/image/mahindra.png" },
  // { src: "/image/mercede.png" },
  // { src: "/image/paper.png" },
  // { src: "/image/union.png" },
  
  
  // { src: "/image/unionjpg.jpg" }, 
  // { src: "/image/paperjpg.jpg" },
  // { src: "/image/deloittejpg.jpg" },
  // { src: "/image/icicijpg.jpg" },
  // { src: "/image/johnsonjpg.jpg" },
  // { src: "/image/mahindrajpg.jpg" },
  // { src: "/image/mercedejpg.jpg" },


  // { src: "/image/unionjpeg.jpeg" }, 
  // { src: "/image/paperjpeg.jpeg" },
  // { src: "/image/deloittejpeg.jpeg" },
  // { src: "/image/icicijpeg.jpeg" },
  // { src: "/image/johnsonjpeg.jpeg" },
  // { src: "/image/mahindrajpeg.jpeg" },
  // { src: "/image/mercedejpeg.jpeg" },
  

];

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
