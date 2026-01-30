import React from "react";
import "./HeroCarousel.css";

import banner from "../../assets/anh1.jpg"; // dùng ảnh có sẵn

function HeroCarousel() {
  return (
    <section className="hero">
      <div className="hero-slide">
        <img src={banner} alt="Pizza Banner" />

        <div className="hero-content">
          <h1>Best Pizza In Town</h1>
          <p>Fresh ingredients – Hot & Delicious</p>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
