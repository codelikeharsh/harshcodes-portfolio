import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const navLinks = [
    { to: "home", label: "HOME" },
    { to: "about", label: "ABOUT" },
    { to: "project", label: "PROJECTS" },
    { to: "contact", label: "CONTACT" },
  ];
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-black/70 backdrop-blur-md shadow-md border-b border-white/10"
      : "bg-black/30 backdrop-blur-sm"
  } text-white`}
>


      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/v60NtmHj/Picsart-25-07-07-03-15-50-869.png"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-base font-bold tracking-wider">HARSH UPADHYAY</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-70}
              className="cursor-pointer hover:text-purple-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-[60px] w-60 bg-white shadow-lg border border-gray-100 rounded-md"
              >
                <ul className="flex flex-col text-sm font-medium divide-y divide-gray-100">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={700}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-4 text-right hover:text-purple-600 transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
