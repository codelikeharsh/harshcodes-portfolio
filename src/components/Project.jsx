import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Project() {
  const project = {
    title: "Visitor Management System",
    description:
      "A full-stack web app for securely managing visitors, with real-time dashboards, push notifications, and Firebase integration.",
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"
    ],
    image: "https://i.ibb.co/KcwvFRVs/Screenshot-2025-07-06-at-10-42-11-PM.png",
    github: "https://github.com/codelikeharsh/visitor-management.git",
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">PROJECT</h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto my-2 rounded" />
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            A featured project I built to solve a real-world organizational problem.
          </p>
        </div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-xl overflow-hidden md:flex md:items-center"
        >
          {/* Image */}
          {/* Smartphone Frame */}
<div className="md:w-1/2 flex justify-center items-center p-6">
  <div className="w-[240px] h-[500px] rounded-[2rem] border-[12px] border-black bg-black shadow-lg relative overflow-hidden">
    <img
      src={project.image}
      alt="Project screenshot"
      className="w-full h-full object-contain rounded-[1rem]"
    />
    {/* Camera hole */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>
  </div>
</div>

          {/* Content */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold mt-2 hover:underline"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
