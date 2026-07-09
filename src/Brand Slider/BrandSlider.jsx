import React from "react";
import { Image } from "react-bootstrap";

import deloitteLogo from "../../../assets/images/clients_logo/deloitte.png";
import iciciLogo from "../../../assets/images/clients_logo/icici.png";
import johnsonLogo from "../../../assets/images/clients_logo/johnson.png";
import mahindraLogo from "../../../assets/images/clients_logo/mahindra.png";
import mercedeLogo from "../../../assets/images/clients_logo/mercede.png";
import paperLogo from "../../../assets/images/clients_logo/paper.png";
import unionLogo from "../../../assets/images/clients_logo/union.png";

export default function BrandsSlider() {
  const logos = [
    { src: deloitteLogo },
    { src: iciciLogo },
    { src: johnsonLogo },
    { src: mahindraLogo },
    { src: mercedeLogo },
    { src: paperLogo },
    { src: unionLogo },
  ];

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
          <div className="marquee-track">
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
