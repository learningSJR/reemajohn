import React from "react";
import { eduData } from "../data/eduData";

function Qualifications() {
  return (
    <section className="p-4 sm:p-6 md:p-10 bg-base-100 flex flex-col">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Educational Qualifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
        {eduData.map((quli, index) => (
          <div key={index} className="card bg-base-100 w-full shadow-md">
            <div className="card-body p-4 sm:p-6">
              <h2 className="card-title text-base sm:text-lg">{quli.degree}</h2>

              <h3 className="text-sm sm:text-base">
                {quli.abbreviation}
                {quli.short && (
                  <span className="text-xs sm:text-sm ml-2 opacity-80">
                    {quli.short}
                  </span>
                )}
              </h3>

              <h4 className="text-xs sm:text-sm opacity-70">
                {quli.authority}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Qualifications;
