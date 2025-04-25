import React, { useState, useEffect, useRef } from "react";

import img1 from "../../../../public/images/home-page-ad.png";
import img2 from "../../../../public/images/home-page-ad.png";
import img3 from "../../../../public/images/home-page-ad.png";

const images = [img1, img2, img3];

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-advance
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-[60%] m-auto overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div
        className="whitespace-nowrap transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="inline-block "
          >
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className=" object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 font-bold text-blue-950 text-3xl pb-2 px-4 rounded-full z-20"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 font-bold text-blue-950 text-3xl pb-2 px-4 rounded-full z-20"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-blue-950" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
