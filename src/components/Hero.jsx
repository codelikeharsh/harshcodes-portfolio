import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollAnim from "../assets/scroll-down.json";

export default function Hero() {
  return (
    <section className="px-4 pt-24 pb-16 text-center md:h-screen md:flex md:items-center md:justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          HEY, I'M{" "}
          <span className="text-purple-500 whitespace-nowrap">HARSH UPADHYAY</span>
        </h1>

        {/* Spacing improved here */}
        <p className="text-gray-400 text-base md:text-lg mt-6">
          An Aspiring Software Engineer who builds full-stack apps, automates things, and
          solves real-world problems with clean, scalable code.
        </p>

        {/* Button spacing increased */}
        <button className="mt-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-md shadow-md transition">
          View Projects
        </button>

        {/* Scroll indicator spacing adjusted */}
        <Lottie animationData={scrollAnim} loop className="w-10 mx-auto mt-14" />
      </div>
    </section>
  );
}
