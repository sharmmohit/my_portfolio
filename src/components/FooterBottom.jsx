import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterBottom = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/sharmmohit" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mohit-sharma-b25868246/",
    },
    { icon: <FaInstagram />, href: "https://www.instagram.com/mohit18nov/" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div // Reduced padding, adjusted background, and font size
      className="bg-gray-900 text-white py-6 text-center text-sm"
      style={{
        background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
      }}
    >
      <div className="container mx-auto">
        <p className="mb-2">Designed and Developed by Mohit Sharma</p>
        <div className="flex justify-center mt-4 space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-gray-400" // Reduced icon size
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} mvrx</p> {/* Added margin-top and reduced font size */}
      </div>
    </div>
  );
};

export default FooterBottom;