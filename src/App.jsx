import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Lenis Smooth Scroll Setup
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

export default function App() {
  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-white text-gray-800 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.section>

      {/* Project Section */}
      <motion.section
        id="project"
        className="bg-gray-100 text-gray-800 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Project />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="bg-white text-gray-800 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
