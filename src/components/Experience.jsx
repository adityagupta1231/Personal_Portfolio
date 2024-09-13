import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Smooth and faster animation from left
const cardAnimationFromLeft = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0.0, 0.58, 1.0],
    },
  },
};

// Smooth and faster animation from right
const cardAnimationFromRight = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0.0, 0.58, 1.0],
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0px 0px 20px rgba(75, 0, 130, 0.6)",
  transition: {
    duration: 0.3,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-6 bg-transparent">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl poppins-bold text-white"
      >
        Education
      </motion.h1>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }} // Ensures animation happens when card is in view while scrolling
            variants={
              index % 2 === 0 ? cardAnimationFromLeft : cardAnimationFromRight
            } // Alternate animation from left/right
            whileHover={hoverEffect}
            className="hover:bg-blue-900 border border-blue-500 shadow-lg rounded-lg p-6 w-full max-w-sm transition-transform cursor-pointer"
          >
            {/* Role */}
            <h6 className="text-lg poppins-normal mb-2 text-white">
              {experience.role}
            </h6>

            {/* Description */}
            <p className="poppins-light text-sm">{experience.description}</p>

            {/* Year */}
            <p className="text-sm poppins-extralight my-1">{experience.year}</p>

            <p className="poppins-light text-md text-gray-300 py-5 poppins-normal">
              <ul className="list-disc px-4">
                <li>{experience.Content}</li>
              </ul>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
