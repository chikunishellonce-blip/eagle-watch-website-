import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import FieldLog from "@/components/FieldLog";
import Industries from "@/components/Industries";
import Technology from "@/components/Technology";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <FieldLog />
      <Industries />
      <Technology />
      <WhyUs />
      <Contact />
    </>
  );
}
