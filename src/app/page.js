import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="dark:bg-gray-900 bg-[#F5FCFF]">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
