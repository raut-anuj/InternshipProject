import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  faComments,
  faVideo,
  faUpload,
  faFileLines,
  faDoorOpen,
  faChartSimple,
  faDesktop,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

export default function Slider() {

const baseCards = [
    {
      title: "Public/Private Chat",
      icon: faComments,
    },
    {
      title: "HD Videoconferencing",
      icon: faVideo,
    },
    {
      title: "Upload Presentations",
      icon: faUpload,
    },
    {
      title: "Live MoM",
      icon: faFileLines,
    },
    {
      title: "Breakout Rooms",
      icon: faDoorOpen,
    },
    {
      title: "Public/Private Chat",
      icon: faComments,
    },
    {
      title: "Real Time Polling",
      icon: faChartSimple,
    },
    {
      title: "Multi Level Screen Sharing",
      icon: faDesktop,
    },
    {
      title: "Upload Presentations",
      icon: faUpload,
    },
    {
      title: "Multi Level Screen Sharing",
      icon: faDesktop,
    },
    {
      title: "Multi User Whiteboard",
      icon: faChalkboardUser,
    },
    {
      title: "Real Time Polling",
      icon: faChartSimple,
    },
];
  
const [selectedIndex, setSelectedIndex] = useState(0);

const autoplay = useRef(
  Autoplay({
    delay: 1000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })
);

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "center",
    skipSnaps: false,
  },
  [autoplay.current]
);

const next = useCallback(() => {
  if (emblaApi) emblaApi.scrollNext();
}, [emblaApi]);

const prev = useCallback(() => {
  if (emblaApi) emblaApi.scrollPrev();
}, [emblaApi]);

useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  emblaApi.on("select", onSelect);
  onSelect();

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);

 return (
  <Container className="slider-container">

    <div className="slider-main">

      <Button className="arrow-btn" onClick={prev}>
        ❮
      </Button>

      <div className="viewport" ref={emblaRef}>
  <div className="cards-wrapper">
    {baseCards.map((card, i) => (
      <div className="embla__slide" key={i}>
        <div
          className={`card-item ${
            i === selectedIndex
              ? "active-card"
              : Math.abs(i - selectedIndex) === 1
              ? "middle-card"
              : "back-card"
          }`}
        >
          <div className="icon-box">
            <FontAwesomeIcon
              icon={card.icon}
              className="feature-icon"
            />
          </div>

          <p className="feature-title">
            {card.title}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      <Button className="arrow-btn" onClick={next}>
        ❯
      </Button>

    </div>

   <div className="slider-dots">
  {baseCards.map((_, index) => (
    <span
      key={index}
      className={`dot ${
        index === selectedIndex ? "active-dot" : ""
      }`}
      onClick={() => emblaApi?.scrollTo(index)}
    />
  ))}
</div>

  </Container>
);
}
