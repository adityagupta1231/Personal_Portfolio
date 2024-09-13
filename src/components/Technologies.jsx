import { motion } from "framer-motion";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiMongodb, SiPostman } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, 10, 0, -10, 0], // Zigzag movement
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-6">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl poppins-bold"
        id="Tech"
      >
        Tech<span className="red"> ToolboX</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <DiPostgresql className="text-7xl text-cyan-200" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiPostman className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-300" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FiFigma className="text-7xl text-orange-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiCanva className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
