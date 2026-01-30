import React, { useState, useEffect } from "react";
import "./Banner.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

function Banner() {
  const banners = [
    {
      image: banner1,
      title: "Neapolitan Pizza",
      desc: "Traditional Italian pizza with fresh mozzarella and basil"
    },
    {
      image: banner2,
      title: "Cheese Lover Pizza",
      desc: "Rich cheese flavor with crispy crust"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const prevSlide = () => {
    setIndex(index === 0 ? banners.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === banners.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="banner">
      <img
        src={banners[index].image}
        alt={banners[index].title}
        className="banner-img"
      />

      <div className="banner-content">
        <h1>{banners[index].title}</h1>
        <p>{banners[index].desc}</p>
      </div>

      <button className="banner-control left" onClick={prevSlide}>
        ❮
      </button>
      <button className="banner-control right" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
}

export default Banner;
