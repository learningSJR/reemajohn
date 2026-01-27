import React from "react";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="subjects" className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

      <div className="flex justify-center gap-4 flex-wrap">
        <ul>
          {skills.map((sub, i) => (
            <li key={i} className="badge badge-primary p-4 flex flex-col mt-2">
              {sub}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
