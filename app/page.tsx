"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import FieldLog from "@/components/FieldLog";
import Industries from "@/components/Industries";
import Technology from "@/components/Technology";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  return (
    <>
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div>
        {activeSection === "hero" && (
          <>
            <Hero />
            <TrustBar />
          </>
        )}
        {activeSection === "about" && <About />}
        {activeSection === "services" && <Services />}
        {activeSection === "fieldlog" && <FieldLog />}
        {activeSection === "industries" && <Industries />}
        {activeSection === "technology" && <Technology />}
        {activeSection === "why" && <WhyUs />}
        {activeSection === "contact" && <Contact />}
      </div>
    </>
  );
}
