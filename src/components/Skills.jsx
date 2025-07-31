import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaJava,
  FaDatabase,
  FaSchool,
  FaGraduationCap,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import FooterBottom from "./FooterBottom";
import profileImg from './mohit.jpg';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-blue-400" />,
      skills: [
        { name: "C", icon: <SiC className="text-blue-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      ],
    },
    {
      title: "Web Development",
      icon: <FaReact className="text-cyan-400" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-emerald-400" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-purple-400" />,
      skills: [
        { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  const education = [
    {
      id: 1,
      title: "B.Tech in Computer Science & Engineering",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      year: "2022-2026",
      percentage: "7.5 CGPA",
      icon: <FaGraduationCap className="text-cyan-400" />,
    },
    {
      id: 2,
      title: "12th Grade",
      institution: "Mar Thoma Higher Secondary School",
      year: "2021-2022",
      percentage: "74%",
      icon: <FaSchool className="text-blue-300" />,
    },
    {
      id: 3,
      title: "10th Grade",
      institution: "Mar Thoma Higher Secondary School, Indore",
      year: "2019-2020",
      percentage: "74%",
      icon: <FaSchool className="text-blue-300" />,
    },
  ];

  return (
    <>
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
          {/* Profile Image */}
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

          {/* About Section */}
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
              I am currently pursuing my B.Tech in Computer Science & Engineering from SVVV
              Indore (2022-2026).
            </p>
          </motion.div>

          {/* Education Timeline Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Education Journey
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-600 transform -translate-x-1/2">
                <motion.div
                  className="h-full w-full bg-gradient-to-b from-cyan-400 to-blue-600"
                  animate={{
                    backgroundPosition: ['0% 0%', '0% 100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '100% 200%',
                    backgroundImage: 'linear-gradient(to bottom, #22d3ee, #3b82f6, #2563eb)'
                  }}
                />
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between w-full`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: 0.7 + index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={`w-5/12 p-6 rounded-xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                    style={{
                      background: 'rgba(30, 58, 138, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(56, 182, 255, 0.2)',
                      boxShadow: '0 4px 20px rgba(34, 211, 238, 0.1)'
                    }}
                    whileHover={{
                      boxShadow: '0 8px 30px rgba(34, 211, 238, 0.3)',
                      background: 'rgba(30, 58, 138, 0.3)'
                    }}
                  >
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                      {edu.title}
                    </h3>
                    <p className="text-gray-200 mt-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mt-1">{edu.year}</p>
                    <p className="text-cyan-300 font-medium mt-2">{edu.percentage}</p>
                  </motion.div>
                  
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <motion.div 
                      className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center z-10 shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      {edu.icon}
                    </motion.div>
                    <motion.div 
                      className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              My Skills
            </h2>
            
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.7 + catIndex * 0.1
                  }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="mr-4 text-3xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {category.title}
                  </h3>
                </motion.div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 0.8 + catIndex * 0.1 + skillIndex * 0.05,
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
                      className="p-5 rounded-xl transition-all w-full"
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
                          animate={{
                            y: [0, -5, 0],
                            transition: {
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-gray-300 font-medium text-center">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
