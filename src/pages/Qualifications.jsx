import React from "react";
import { eduData } from "../data/eduData";

function Qualifications() {
  return (
    <section className="p-10 bg-base-100 flex flex-col">
      <h2 className="text-3xl font-bold text-center mb-6">
        Educational Qualifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {eduData.map((quli) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{quli.degree}</h2>
              <h3>
                {quli.abbreviation}{" "}
                {quli.short && (
                  <span className="text-sm ml-2">{quli.short}</span>
                )}
              </h3>
              <h4>{quli.authority}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Qualifications;
