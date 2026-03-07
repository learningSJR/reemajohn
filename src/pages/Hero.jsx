import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Reema_John_Resume.pdf";
    link.download = "Reema_John_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero min-h-screen bg-base-200 relative overflow-hidden animate-[(--animate-fade)]">
      {/* Background Corner Image */}
      <img
        src="/bgcard.png"
        alt=""
        className="absolute bottom-0 right-0 w-1920 opacity-80 pointer-events-none rotate-45"
      />
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl"></div>

      {/* Corner accents */}
      <span className="absolute top-4 left-4 w-16 h-1 bg-primary"></span>
      <span className="absolute top-4 left-4 w-1 h-16 bg-primary"></span>

      <div className="hero-content text-center">
        <div>
          <div className="flex justify-center">
            <img src="/reema.png" />
          </div>
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Reema John</span>
          </h1>

          <p className="py-4 text-xl font-medium">
            PGT Commerce (Business Studies / Marketing)
          </p>

          <p className="max-w-3xl mx-auto">
            Dedicated and result-oriented Post Graduate Teacher specializing in
            Business Studies and Marketing, with{" "}
            <span className="font-bold">8 </span>years and overall{" "}
            <span className="font-bold">10+</span> of teaching experience.
            Skilled in lesson planning, innovative teaching methodologies,
            student assessment, and fostering analytical and critical thinking.
            Passionate about preparing students for academic excellence and
            real-world business challenges.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              className="btn btn-primary"
              id="download"
              onClick={handleDownload}
            >
              Download Resume
            </button>
            <button
              className="btn btn-outline"
              id="contact"
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
