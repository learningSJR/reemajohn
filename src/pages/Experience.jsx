import React from "react";
import { CheckCircle } from "lucide-react";
import { professionalExperience } from "../data/professionalExperience";
function Experience() {
  return (
    <>
      <section className="mt-6">
        <h2 className="text-3xl font-bold text-center mb-2">
          Professional Experience
        </h2>
        <div
          id="experience"
          className="card p-10 bg-base-100 max-w-5xl mx-auto flex flex-col gap-6 "
        >
          {professionalExperience.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 p-6 rounded-2xl shadow-md relative overflow-hidden"
            >
              {/* Background Corner Image */}
              <img
                src="/bgcard.png"
                alt=""
                className="absolute bottom-10 right-50 w-150 opacity-90 pointer-events-none rotate-90"
              />

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl text-center font-bold text-primary mb-2 p-1">
                  {item.school} | {item.duration}
                </h4>

                <h3 className="font-bold text-fuchsia-900 mb-1 text-center">
                  {item.designation}
                </h3>

                <div className="divider"></div>

                <h4 className="font-bold underline text-slate-600 mb-2">
                  Roles and Responsibilities
                </h4>

                <ul className="space-y-2">
                  {item.roles.map((rol, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle size={16} className="text-primary mt-1.5" />
                      <span className="leading-relaxed text-slate-500">
                        {rol}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
