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
    <div className="bg-black text-white py-4 text-center text-sm">
      <div className="container mx-auto">
        <p className="mb-2">Designed and Developed by Mohit Sharma</p>
        <div className="flex justify-center mt-2 space-x-4">
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
              className="text-xl hover:text-gray-400"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} mvrx</p>
      </div>
    </div>
  );
};

export default FooterBottom;