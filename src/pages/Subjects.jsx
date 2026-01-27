import React from "react";

function Subjects() {
  const subjects = ["Business Studies", "Marketing", "English"];
  return (
    <section id="subjects" className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">Subjects Handled</h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {subjects.map((sub, i) => (
          <span key={i} className="badge badge-primary p-4">
            {sub}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Subjects;
