import { useState } from "react";
import aboutImg from "../../public/assets/i4-removebg-preview.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const fadeInTogether = (
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.5
) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      when: "beforeChildren", // Ensure all child elements animate together
      staggerChildren: 0.1,
    },
  },
});

const services = [
  { title: "Web Developer" },
  { title: "Problem Solver" },
  { title: "Graphics Designer" },
];

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-b border-neutral-900 pb-12 text-neutral-200">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl poppins-bold"
        id="About"
      >
        About
        <span className="red hover-shadow-red"> Me</span>
      </motion.h1>

      <div className="flex flex-wrap items-start">
        {/* About Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center px-6 lg:-mt-40 -mt-10">
            <img
              className="rounded-2xl shadow-lg lg:w-3/4"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>

        {/* About Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col items-center lg:items-start lg:-mt-20 lg:-ml-20 ">
            {/* Truncated Text with "Show More" Button */}
            <p
              className={`my-2 max-w-xl py-6 px-6 text-gray-300 text-justify poppins-light ${
                showMore ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              {ABOUT_TEXT}
            </p>

            <div className="flex justify-end w-full lg:pr-36 lg:mt-4 md:pr-36 md:mt-1 pr-6 lg:-ml-20 ">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-4 py-2 bg-cyan-600 hover:bg-indigo-800 text-white rounded-md transition duration-300"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>

            {showMore && (
              <motion.div
                variants={fadeInTogether("up", "tween", 0.2, 0.5)} // Services come up together
                initial="hidden"
                whileInView="show"
                className="mt-12 w-full"
              >
                <h2 className="text-1xl text-center poppins-medium mb-6 lg:mr-40">
                  Services
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="w-40 h-40 relative border-2 rounded-lg overflow-hidden shadow-md bg-neutral-800 
                        hover:border-[2px] hover:animate-border border-transparent transition-all duration-300"
                      style={{
                        borderImage:
                          "linear-gradient(to bottom right, rgb(11, 96, 176), rgb(64, 162, 216)) 1", // Multicolor border
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                        <span className="text-white poppins-light">
                          {service.title}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
