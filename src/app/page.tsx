import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Collection from "@/components/Collection";
import States from "@/components/States";
import Marquee from "@/components/Marquee";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyUs />
      <Collection />
      <Marquee />
      <States />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
