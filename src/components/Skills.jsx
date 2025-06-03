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

  return (
    <>
      {/* Navbar Spacer */}
      <div className="h-16"></div>
      
      <section className="relative overflow-hidden text-white py-12 bg-black">
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => {
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
          {/* Profile Image with Cool Animation */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8 }
            }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, 10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src={profileImg}
                alt="Mohit Sharma"
                className="relative rounded-2xl border-4 border-cyan-400 shadow-lg w-64 h-auto object-cover z-10"
              />
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-cyan-400"
                  initial={{ 
                    x: Math.random() * 40 - 20,
                    y: Math.random() * 40 - 20,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * 80 - 40,
                    y: Math.random() * 80 - 40,
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: `${Math.random() * 6 + 4}px`,
                    height: `${Math.random() * 6 + 4}px`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Know Who I'M Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.3
              } 
            }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Know Who I'M
            </h2>
            <p className="text-xl mb-3 text-gray-300">
              Hi Everyone, I am <span className="text-cyan-400 font-semibold">Mohit Sharma</span> from
              Indore, India.
            </p>
            <p className="text-xl text-gray-300">
              I am currently pursuing my B.Tech in Computer Science from SVVV
              Indore (2022-2026).
            </p>
          </motion.div>

          {/* Professional Skillset Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Professional Skillset
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  className="p-5 rounded-xl transition-all"
                  style={{ 
                    background: "rgba(30, 30, 30, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(100, 100, 255, 0.2)"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      className="text-5xl mb-3"
                    >
                      {skill.icon}
                    </motion.div>
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

      <FooterBottom
        style={{
          background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
        }}
      />
    </>
  );
};

export default Skills;