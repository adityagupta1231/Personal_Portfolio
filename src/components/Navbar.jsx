import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > scrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full p-5 z-50 ${
          isVisible ? "visible" : "invisible"
        } transition-all duration-200 ease-in-out`}
        animate={isVisible ? { y: 0 } : { y: -80 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "black",
          borderBottom: "none",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="lg:mx-16 poppins-bold text-4xl text-white">
            A<span className="red shadow-red">D</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-500 lg:mx-16 poppins-bold hover:shadow-red-600/50">
            {["Home", "About", "Tech", "Projects", "Contact Me"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  whileHover="hover"
                  variants={{
                    hover: {
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    },
                  }}
                  className={`cursor-pointer relative group ${
                    item === "Contact Me" ? "pr-6" : ""
                  }`}
                >
                  <a href={`#${item}`}>
                    <motion.span
                      className="text-gray-500 hover:red text-lg"
                      animate={{ x: 0 }}
                      initial={{ x: 0 }}
                    >
                      {item}
                    </motion.span>
                  </a>
                </motion.li>
              )
            )}
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div
            className={`md:hidden cursor-pointer ${
              isOpen ? "active red" : ""
            } hover:red`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <AiOutlineClose size={20} className="text-red-500" />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`${
            isOpen ? "block absolute top-16 right-4" : "hidden"
          } md:hidden text-white p-4 shadow-lg rounded-lg w-40 poppins-bold`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ background: "black", zIndex: 100, minHeight: "100px" }}
        >
          <ul className="space-y-2 text-gray-500 text-left">
            {["Home", "About", "Tech", "Projects", "Contact Me"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  whileHover="hover"
                  variants={{
                    hover: {
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    },
                  }}
                >
                  <a href={`#${item}`}>
                    <motion.span
                      className="text-gray-500 hover:red text-sm font-medium"
                      animate={{ x: 0 }}
                      initial={{ x: 0 }}
                    >
                      {item}
                    </motion.span>
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </motion.nav>

      <div className="pt-24">{/* Your main content goes here */}</div>
    </>
  );
};

export default Navbar;
