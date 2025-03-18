import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Variants for animations
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const navItems = ["Home", "About", "Projects", "Resume"];

  return (
    <nav className="text-white p-4 fixed top-0 w-full z-50 shadow-lg"
      style={{ background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)" }}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo (Always Visible) */}
        <div className="flex items-center z-50">
          <span className="text-4xl font-semibold mr-1">Mohit</span>
          <span className="text-blue-500 text-2xl">.</span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden z-50">
          {isOpen ? (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <XMarkIcon className="h-8 w-8" />
            </motion.div>
          ) : (
            <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
              <Bars3Icon className="h-8 w-8" />
            </motion.div>
          )}
        </button>

        {/* Desktop Nav with Underline Hover Effect */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative group transition-all"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center space-y-8 text-2xl z-40"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="relative group transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

