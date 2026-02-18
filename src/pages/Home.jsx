import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "@/components/Carousel";

import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Qualifications from "@/pages/Qualifications";
import Experience from "@/pages/Experience";
import Subjects from "@/pages/Subjects";
import Achievements from "@/pages/Achievements";
import Contact from "@/pages/Contact";
import Skills from "@/pages/Skills";
import Certification from "./Certification";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  useEffect(() => {
    document.title = "Hello Reema!";
    let link = document.querySelector('link[rel="icon"][type="image/png"]');

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }

    link.href = "/favicon.png";
  }, []);
  return (
    <>
      <Hero />
      <section id="Qualifications">
        <Qualifications />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Subjects">
        <Subjects />
      </section>
      <section id="Certification">
        <Certification />
      </section>
      <section id="Achievements">
        <Achievements />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
