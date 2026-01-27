import React, { useEffect, useState } from "react";
import { certi } from "@/data/certification";
import {
  CheckCircle,
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRightCircle,
  MoveLeft,
} from "lucide-react";

function Certification() {
  const [current, setCurrent] = useState(0);
  const total = certi.length;

  function nextBtn() {
    setCurrent((prev) => (prev + 1) % total);
  }
  function prevBtn() {
    setCurrent((prev) => (prev - 1 + total) % total);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      nextBtn();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
        Certification
      </h2>
      <div className="relative bg-base-200 rounded-2xl overflow-hidden shadow-lg h-[90vh]">
        {/* Image */}
        <img
          key={current}
          src={certi[current].img}
          alt={certi[current].label}
          className="w-full h-full animate-fade object-contain object-center translate-y-[calc(90vh-99.5%)]"
        />
        {/* Navigation Buttons */}
        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
          <button onClick={prevBtn} className="">
            <ChevronLeftCircle
              size={32}
              className="text-primary btn btn-circle bg-base-100 shadow-md hover:scale-110 transition"
            />
          </button>
          <button
            onClick={nextBtn}
            className="btn btn-circle bg-base-100 shadow-md"
          >
            <ChevronRightCircle
              size={32}
              className="text-primary btn btn-circle bg-base-100 shadow-md hover:scale-110 transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certification;
