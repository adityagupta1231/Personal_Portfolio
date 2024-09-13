import React, { useRef, useState, useEffect } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Animation for form appearance
const cardAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0.0, 0.58, 1.0],
    },
  },
};

const Contact = () => {
  const form = useRef();
  const [focusedField, setFocusedField] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID, // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATEID, // Replace with your EmailJS template ID
        form.current,
        import.meta.env.VITE_USERID // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleScroll = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setHasAnimated(true);
        window.removeEventListener("scroll", handleScroll); // Remove event listener after animation has triggered
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-4 md:py-6 lg:py-8">
      {/* Image and Form Container */}
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-40">
        {/* Image (visible only on desktop screens) */}
        <div className="hidden lg:block lg:w-96 flex justify-end opacity-85">
          <img
            src="./assets/pngwing.com.png"
            alt="Contact"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Form */}
        <motion.div
          id="contact-form"
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          variants={cardAnimation}
          className="bg-black border border-blue-600 shadow-lg rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 w-full max-w-md mx-auto"
        >
          {/* Title */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.05 }}
            className=" flex mb-4 justify-center text-center lg:text-5xl text-2xl poppins-bold gap-3"
            id="Contact Me"
          >
            Reach
            <span className="red flex gap-3">Out </span>
            <span className="flex red lg:mt-0 my-auto">
              <BsRocketTakeoff />
            </span>
          </motion.h1>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className="w-full p-2 rounded-md bg-transparent border-2 border-blue-800 text-sm sm:text-base"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className="w-full p-2 rounded-md bg-transparent border-2 border-blue-800 text-sm sm:text-base"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              className="w-full p-2 rounded-md bg-transparent border-2 border-blue-800 text-sm sm:text-base"
              required
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-sky-700 p-3 rounded-md font-semibold shadow-md hover:bg-transparent hover:border-2 hover:border-blue-900 hover:text-blue-900"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
