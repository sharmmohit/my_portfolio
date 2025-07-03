import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project3 from "./notes_error.png";
import project4 from "./weather.png";
import project5 from "./signature.png";
import project6 from "./food.png";
import project7 from "./news_research.png";
import project8 from "./cropboom.png";
import project9 from "./chat.png";
import project10 from "./tripplan.png";
import project11 from "./travel.png";
import project12 from "./text.png"
import FooterBottom from "../FooterBottom";


const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      title: "Travel Booking System",
      description: "A comprehensive application enabling users to seamlessly book flights,cabs ,buses and trains though a single,intuitive platform.",
      githubLink: "https://github.com/sharmmohit/MyTripPlan",
      liveLink: "https://your-live-link-3",
      image: project11,
      techStack: ["React.js","Tailwind CSS","Node.js", "AI", "APIs"],
    },
    {
      title: "Trip Planner",
      description: "AI Powered Farmer Online Crop Marketplace.",
      githubLink: "https://github.com/sharmmohit/CropBoom-AI-Crop-Marketplace",
      liveLink: "https://your-live-link-3",
      image: project10,
      techStack: ["React.js","Tailwind CSS","Node.js", "AI", "APIs"],
    },
    {
      title: "Financial Assistant",
      description: "AI Financial Assistant Chatbox.",
      githubLink: "https://github.com/sharmmohit/CropBoom-AI-Crop-Marketplace",
      liveLink: "https://your-live-link-3",
      image: project9,
      techStack: ["React.js","Node.js","AI", "APIs"],
    },
    {
      title: "CropBoom",
      description: "AI Powered Farmer Online Crop Marketplace.",
      githubLink: "https://github.com/sharmmohit/CropBoom-AI-Crop-Marketplace",
      liveLink: "https://your-live-link-3",
      image: project8,
      techStack: ["React.js","Tailwind CSS", "AI", "APIs"],
    },
    {
      title: "WEATHER APP",
      description: "A weather app built using APIs to fetch live weather data.",
      githubLink: "https://github.com/your-github-repo-1",
      liveLink: "https://your-live-link-1",
      image: project4,
      techStack: ["MERN", "JavaScript", "APIs"],
    },
    {
      title: "NOTES ERROR",
      description: "A responsive and stylish notes-taking web application.",
      githubLink: "https://github.com/your-github-repo-2",
      liveLink: "https://your-live-link-2",
      image: project3,
      techStack: ["CSS TEMPLATES", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "SIGNATURE CANVAS",
      description: "A digital canvas for drawing signatures with customization.",
      githubLink: "https://github.com/your-github-repo-3",
      liveLink: "https://your-live-link-3",
      image: project5,
      techStack: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "FOOD ORDERING",
      description: "A food ordering platform for seamless online ordering.",
      githubLink: "https://github.com/your-github-repo-4",
      liveLink: "https://your-live-link-4",
      image: project6,
      techStack: ["React.js", "MERN"],
    },
    {
      title: "NEWS RESEARCH TOOL",
      description: "A news research tool with AI-powered analysis.",
      githubLink: "https://github.com/sharmmohit/News-Research-Tool",
      liveLink: "https://your-live-link-5",
      image: project7,
      techStack: ["Python", "AI", "LLM", "APIs"],
    },
     {
      title: "Image-Text-Converter",
      description: "An image-to-text converter web application built with Next.js and Tesseract.js.",
      githubLink: "https://github.com/sharmmohit/image-to-text-converter",
      liveLink: "https://candid-macaron-2ce0ed.netlify.app/",
      image: project12,
      techStack: ["Next.js", "Tesseract.js", "Tailwind CSS"],
    },
  ];

  const techStacks = [
    "All",
    "MERN",
    "JavaScript",
    "HTML",
    "CSS",
    "APIs",
    "React.js",
    "Next.js",
    "Node.js",
    "AI",
    "Bootstrap",
    "CSS TEMPLATES",
    "Tailwind CSS",
    "Python",
    "LLM",
    "MySql"

  ];

  const filteredProjects = projects.filter((project) =>
    activeTab === "All" ? true : project.techStack.includes(activeTab)
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative overflow-hidden text-white py-16 bg-black"
        style={{
          marginTop: '4rem',
        }}
      >
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
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            My Projects
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {techStacks.map((techStack, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(techStack)}
                className={`py-2 px-4 rounded-lg border transition-all duration-300 transform
                  ${
                    activeTab === techStack
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent scale-105 shadow-lg"
                      : "bg-gray-900 text-white border-blue-500 hover:bg-gray-800 hover:scale-95"
                  } mr-2 mb-2`}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                {techStack}
              </motion.button>
            ))}
          </div>

          {/* Project Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl transition-all duration-300"
                style={{ 
                  background: "rgba(30, 30, 30, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(100, 100, 255, 0.2)"
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-gray-800 text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </motion.a>
                 
                </div>
              </motion.div>
            ))}
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
      </motion.section>

      <FooterBottom
        style={{
          background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
        }}
      />
    </>
  );
};

export default Projects;