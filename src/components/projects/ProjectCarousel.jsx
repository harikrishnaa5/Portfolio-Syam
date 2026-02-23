import React, { useState } from "react";

const ProjectCarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full overflow-hidden bg-gray-50">
      {/* Sliding Track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-52 object-contain flex-shrink-0"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2
                       bg-white/80 hover:bg-white shadow rounded-full px-3 py-1 cursor-pointer"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       bg-white/80 hover:bg-white shadow rounded-full px-3 py-1 cursor-pointer"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 py-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-black scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
