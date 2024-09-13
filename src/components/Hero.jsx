import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "UI/UX Designer",
  "Software Developer",
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  // Rotate roles every 2.5 seconds
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section
      className="relative border-b border-neutral-900 flex flex-col lg:flex-row items-center justify-center min-h-screen text-white p-8"
      id="Home"
    >
      {/* Right background image */}
      <img
        className="-z-20 absolute h-full right-0 translate-x-1/4  lg:rotate-0 md:scale-x-[-1] md:-mx-60 opacity-15 lg:mr-10 sm:-mr-80 transform lg:scale-x-[-1]"
        src="../assets/bgimage.png"
        alt=""
      />

      {/* Left Background Image */}
      <img
        className="-z-20 absolute h-full left-0 -translate-x-3/4 lg:-rotate-0 rotate-0 opacity-15 lg:ml-40 md:ml-40 sm:-mr-40 "
        src="../assets/bgimage.png"
        alt=""
      />
      {/* Right content: Circular Image for mobile screens */}
      <motion.div
        className="relative w-full lg:hidden flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }} // Reduced delay
      >
        <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg shadow-sky-400/90 bg-blue-600 opacity-90">
          <img
            src="../assets/i1.jpg" // Replace with the correct image path
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Left content: Text and buttons */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col items-center lg:items-start lg:ml-16" // Added margin-left for larger screens
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} // Adjusted duration
      >
        <motion.h1
          className="text-5xl md:text-5xl lg:text-7xl poppins-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }} // Reduced delay
        >
          <span className="pr-5 ">Hey,</span>I&apos;m
        </motion.h1>
        <motion.h1
          className="md:text-6xl lg:text-8xl text-4xl poppins-bold mb-8 red"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }} // Reduced delay
        >
          Aditya Gupta
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} // Adjusted duration
        >
          I&apos;m a{" "}
          <motion.span
            className="red shadow-red poppins-semibold-italic lg:text-4xl"
            key={currentRole}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-6 poppins-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }} // Reduced delay
        >
          An enthusiastic individual with good platform solving skills and
          passion about learning new things.
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center lg:justify-start space-x-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }} // Adjusted delay
        >
          <motion.a
            href={`${import.meta.env.VITE_LINKEDINID}`}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black red border-2 border-transparent shadow-lg shadow-blue-600/50 hover:bg-black transition-all"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedinIn size={24} />
          </motion.a>
          <motion.a
            href={`${import.meta.env.VITE_GITHUBID}`}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black red border-2 border-transparent shadow-lg shadow-blue-600/50 hover:shadow-red hover:bg-black transition-all"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href={`${import.meta.env.VITE_INSTAID}`}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black red border-2 border-transparent shadow-lg shadow-blue-600/50 hover:shadow-red hover:bg-black transition-all"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram size={24} />
          </motion.a>
        </motion.div>

        {/* Button */}
        <motion.a
          href="../assets/Resume_AD.pdf"
          download="Resume_AD.pdf"
          className="inline-block bg-cyan-700 text-white poppins-bold py-3 px-8 rounded-full border-2 border-transparent transition-all hover:bg-black hover:border-cyan-600 hover:shadow-lg hover:shadow-red"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }} // Reduced delay
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Right content: Circular Image for larger screens */}
      <motion.div
        className="lg:w-1/2 hidden lg:flex justify-center lg:justify-end p-8 lg:mr-16" // Added margin-right for larger screens
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }} // Adjusted delay and duration
      >
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden bg-blue-600 shadow-lg shadow-sky-400/90 border-2 border-sky-600 opacity-90 mb-40">
            <img
              src="../assets/i1.jpg" // Replace with the correct image path
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
