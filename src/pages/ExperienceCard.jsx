import React from "react";
import { professionalExperience } from "../data/professionalExperience";

function ExperienceCard() {
  return (
    <div id="experience" className="card p-10 bg-base-100">
      {professionalExperience.map((item) => (
        <div key={item.id}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">
              {/* {item.school} */}
            </h2>
            <div className="divider"></div>

            <div className="card bg-base-200 p-5">
              <h3 className="font-bold">{item.designation}</h3>

              <h4 className="font-semibold mt-2">Role:</h4>

              <ul className="list-disc list-inside">
                {item.role.map((list, idx) => (
                  <li key={idx}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceCard;
