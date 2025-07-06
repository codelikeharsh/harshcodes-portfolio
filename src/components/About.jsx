import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Responsive Design", icon: <FaMobileAlt className="text-blue-400" /> },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">ABOUT ME</h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto my-3 rounded" />
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my current
            skills mostly in terms of programming and technology.
          </p>
        </div>

        {/* Content */}
        <div className="md:flex md:justify-between md:gap-12 items-start">
          {/* Left: About text */}
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-xl font-semibold mb-2">Get to know me!</h3>
            <p>
              I'm a <strong>Software Engineer</strong> focused on building full-stack web
              apps that solve real-world problems and scale with ease.
            </p>
            <p>
              I've worked on projects involving{" "}
              <strong>
                visitor management, real-time dashboards, cloud storage
              </strong>{" "}
              and more — using React, Node, Firebase, and MongoDB.
            </p>
            <p>
              I enjoy turning ideas into reality, optimizing performance, and always
              learning. I'm open to{" "}
              <strong>internships, freelance, or full-time roles</strong> where I can grow
              and contribute.
            </p>
          </div>

          {/* Right: Skills badges with icons */}
          <div className="md:w-1/3 mt-12 md:mt-0">
            <h3 className="text-xl font-semibold mb-5">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-sm text-gray-800 shadow-sm hover:shadow transition"
                  title={name}
                >
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
