import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      {/* Top: Grid layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left: Intro */}
        <div className="md:max-w-md">
          <h3 className="text-xl font-bold mb-2">HARSH UPADHYAY</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            A Software Engineer passionate about building full-stack apps, solving real-world problems, and delivering seamless user experiences.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="text-left md:text-right">
          <h3 className="text-xl font-bold mb-3">SOCIAL</h3>
          <div className="flex gap-4 md:justify-end text-2xl">
            <a
              href="https://linkedin.com/in/codelikeharsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/codelikeharsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/harshxaf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:mail2harshx@gmail.com"
              className="hover:text-purple-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Bottom text */}
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Crafted with 🤍 by{" "}
        <span className="font-semibold text-white">Harsh Upadhyay</span>
      </p>
    </footer>
  );
}
