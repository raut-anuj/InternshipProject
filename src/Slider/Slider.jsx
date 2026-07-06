import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./Slider.css";

export default function Slider() {
  const baseCards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
  const len = baseCards.length;

  const CARD_WIDTH = window.innerWidth < 576 ? 148 : 200;

  const [active, setActive] = useState(len * 10); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const next = () => setActive((prev) => prev + 1);
  const prev = () => setActive((prev) => prev - 1);

  const centerIndex = 2; 

  return (
    <Container className="slider-container d-flex justify-content-center align-items-center">

      <Button variant="dark" className="arrow-btn" onClick={prev}>
        ❮
      </Button>


      <div className="viewport">
        <div
          className="cards-wrapper"
          style={{
            transform: `translateX(-${active * CARD_WIDTH}px)`,
          }}
        >
          {Array.from({ length: len * 100 }).map((_, i) => {
            const card = baseCards[i % len];
            const center = active + centerIndex;

            return (
              <div
                key={i}
                className={`card-item ${
                  i === center
                    ? "active-card"
                    : Math.abs(i - center) === 1
                    ? "middle-card"
                    : "back-card"
                }`}
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>

      <Button variant="dark" className="arrow-btn" onClick={next}>
        ❯
      </Button>
    </Container>
  );
}