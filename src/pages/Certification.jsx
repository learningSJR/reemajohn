import React, { useEffect, useState } from "react";
import { certi } from "@/data/certification";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

function Certification() {
  const [current, setCurrent] = useState(0);
  const total = certi.length;

  const nextBtn = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevBtn = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="container mx-auto px-4 mt-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-slate-800">
        Certification
      </h2>

      {/* Slider Container */}
      <div
        className="relative bg-base-200 rounded-2xl overflow-hidden shadow-lg
             h-[50vh] sm:h-[60vh]"
      >
        {/* Image */}
        <img
          key={current}
          src={certi[current].img}
          alt={certi[current].label}
          className="w-full h-full object-contain object-center transition-opacity duration-500"
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-6">
          <button onClick={prevBtn}>
            <ChevronLeftCircle
              size={32}
              className="text-primary bg-base-100 rounded-full shadow-md hover:scale-110 transition"
            />
          </button>

          <button onClick={nextBtn}>
            <ChevronRightCircle
              size={32}
              className="text-primary bg-base-100 rounded-full shadow-md hover:scale-110 transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certification;
