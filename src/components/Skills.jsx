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

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "C/C++", icon: <FaCuttlefish className="text-blue-600" /> },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section
        className="text-white py-16"
        style={{
          background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Know Who I'M Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold mb-4">Know Who I'M</h2>
            <p className="text-lg mb-2">
              Hi Everyone, I am <span className="cyan-500">Mohit Sharma</span> from
              Noida, India.
            </p>
            <p className="text-lg">
              I am currently pursuing my B.Tech in Computer Science from SVVV
              Indore (2022-2026).
            </p>
          </motion.div>

          {/* Professional Skillset Section */}
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Professional Skillset
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={boxVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.85 }}
                className="p-4 rounded-xl border border-blue-500 transition-all duration-300 hover:bg-gray-800"
                style={{ background: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex items-center justify-center">
                  <span className="text-5xl">{skill.icon}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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