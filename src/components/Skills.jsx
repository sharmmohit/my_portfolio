import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaCuttlefish,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import FooterBottom from "./FooterBottom";
import profileImg from './mohit.jpg';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "C/C++", icon: <FaCuttlefish className="text-blue-600" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      y: -10,
      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  return (
    <>
      <section className="relative overflow-hidden text-white py-16 bg-black">
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 2;
            const left = `${Math.random() * 100}%`;
            const top = `${Math.random() * 100}%`;
            const opacity = Math.random();
            const animationDelay = `${Math.random() * 5}s`;
            const animationDuration = `${5 + Math.random() * 10}s`;
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left,
                  top,
                  opacity,
                  animation: `twinkle ${animationDuration} infinite ${animationDelay}`,
                }}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Floating Profile Image */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, 15, 0],
              transition: {
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.8 }
              }
            }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-xl opacity-20 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Mohit Sharma"
                className="relative rounded-2xl border-4 border-cyan-400 shadow-lg w-64 h-auto object-cover z-10"
              />
            </div>
          </motion.div>

          {/* Know Who I'M Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
              whileHover={{ scale: 1.02 }}
            >
              Know Who I'M
            </motion.h2>
            <motion.p 
              className="text-xl mb-3 text-gray-300"
              whileHover={{ x: 5 }}
            >
              Hi Everyone, I am <span className="text-cyan-400 font-semibold">Mohit Sharma</span> from
              Noida, India.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300"
              whileHover={{ x: 5 }}
            >
              I am currently pursuing my B.Tech in Computer Science from SVVV
              Indore (2022-2026).
            </motion.p>
          </motion.div>

          {/* Professional Skillset Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              variants={textVariants}
            >
              Professional Skillset
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover="hover"
                  className="p-6 rounded-xl transition-all duration-300"
                  style={{ 
                    background: "rgba(30, 30, 30, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(100, 100, 255, 0.2)"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.span 
                      className="text-5xl mb-3"
                      whileHover={{ rotate: 15, scale: 1.2 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CSS for the twinkling stars */}
        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}</style>
      </section>

      {/* Footer */}
      <FooterBottom
        style={{
          background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
        }}
      />
    </>
  );
};

export default Skills;