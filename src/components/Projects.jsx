import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Smooth and faster animation for image
const hoverEffect = {
  scale: 1.05, // Slight grow on hover
  boxShadow: "0px 0px 20px rgba(75, 0, 130, 0.6)", // Cyan glowing shadow on hover
  transition: {
    duration: 0.3,
    ease: [0.6, -0.05, 0.01, 0.99], // Smooth hover transition
  },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl poppins-bold"
        id="Projects"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="relative mb-8 flex flex-wrap lg:justify-center px-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-1/4 mb-4 lg:mb-0 flex flex-col items-center"
            >
              {/* Image with Framer Motion hover effect */}
              <motion.img
                src={project.image}
                width={200}
                height={400}
                alt={project.title}
                className="rounded lg:mb-4 shadow-lg"
                whileHover={hoverEffect}
                whileTap={{ scale: 0.95 }} // Optional: slight scale-down effect on tap
              />
              {/* GitHub Link Button Below Image */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <span className="bg-black border border-blue-500 shadow-lg rounded-lg p-2 px-4 transition-transform cursor-pointer hover:bg-blue-900">
                  View on GitHub
                </span>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center px-4 md:px-0"
            >
              <h4 className="mb-2 poppins-semibold text-xl">{project.title}</h4>
              <p className="mb-4 poppins-light text-neutral-300">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 py-1 text-sm poppins-medium text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
