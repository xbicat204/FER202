import { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1550547660-d9450f859349",
  ];

  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button className="btn prev" onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }>
          ‹
        </button>

        <img src={images[current]} alt="slide" />

        <button className="btn next" onClick={() =>
          setCurrent((current + 1) % images.length)
        }>
          ›
        </button>

        {/* dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
