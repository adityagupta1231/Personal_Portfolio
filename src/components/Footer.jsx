import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12">
      {" "}
      {/* Add padding for better visibility */}
      <div className="flex justify-center mb-4">
        <a href="#Home" className="mr-4 text-gray-600 hover:text-blue-900">
          Home
        </a>
        <a href="#About" className="mr-4 text-gray-600 hover:text-blue-900">
          About
        </a>
        <a href="#Tech" className="mr-4 text-gray-600 hover:text-blue-900">
          Tech
        </a>
        <a href="#Projects" className="mr-4 text-gray-600 hover:text-blue-900">
          Projects
        </a>
        <a
          href="#Contact Me"
          className="mr-4 text-gray-600 hover:text-blue-800"
        >
          Contact
        </a>
      </div>
      <div className="flex justify-center mb-4">
        <a
          href={`${import.meta.env.VITE_LINKEDINID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={24}
            className="mr-4 text-gray-600 hover:text-blue-800"
          />
        </a>
        <a
          href={`${import.meta.env.VITE_GITHUBID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={24}
            className="mr-4 text-gray-600 hover:text-blue-800"
          />
        </a>
        <a
          href={`${import.meta.env.VITE_INSTAID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={24}
            className="mr-4 text-gray-600 hover:text-blue-900"
          />
        </a>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <p className="text-sm text-gray-600">
          &copy; 2024 Aditya Gupta. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
