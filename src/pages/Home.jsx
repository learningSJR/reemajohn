import React, { useEffect } from "react";
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

      <Qualifications />
      <Skills />
      <Experience />
      <Subjects />
      <Certification />
      <Achievements />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
