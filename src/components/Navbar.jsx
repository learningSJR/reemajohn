import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <span className="text-xl font-bold">Teaching Portfolio</span>
      </div>

      <div className="hidden md:flex gap-3">
        <a href="#about" className="btn btn-ghost">
          About
        </a>
        <a href="#experience" className="btn btn-ghost">
          Experience
        </a>
        <a href="#subjects" className="btn btn-ghost">
          Subjects
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
