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
import FooterBottom from "../FooterBottom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      title: "Travel Booking System",
      description: "AI Powered Farmer Online Crop Marketplace.",
      githubLink: "https://github.com/sharmmohit/CropBoom-AI-Crop-Marketplace",
      liveLink: "https://your-live-link-3",
      image: project11,
      techStack: ["React.js","Tailwind CSS", "AI", "APIs"],
    },
     {
      title: "Trip Planner",
      description: "AI Powered Farmer Online Crop Marketplace.",
      githubLink: "https://github.com/sharmmohit/CropBoom-AI-Crop-Marketplace",
      liveLink: "https://your-live-link-3",
      image: project10,
      techStack: ["React.js","Tailwind CSS", "AI", "APIs"],
    },
     {
      title: "CropBoom",
      description: "AI Powered Farmer Online Crop Marketplace.",
      githubLink: "https://github.com/sharmmohit/CropBoom-AI-Crop-Marketplace",
      liveLink: "https://your-live-link-3",
      image: project9,
      techStack: ["React.js","Tailwind CSS", "AI", "APIs"],
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
      githubLink: "https://github.com/your-github-repo-5",
      liveLink: "https://your-live-link-5",
      image: project7,
      techStack: ["Python", "AI", "LLM", "APIs"],
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
    "AI",
    "Bootstrap",
    "CSS TEMPLATES",
    "Tailwind CSS",
    "Python",
    "LLM",
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
        className="text-white py-16"
        style={{
          background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
          marginTop: '4rem', // Added margin-top to create space below the navbar
        }}
      >
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-8 text-center"
          >
            Projects
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {techStacks.map((techStack, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(techStack)}
                className={`py-2 px-4 rounded-lg border border-blue-500 transition-all duration-300 transform
                  ${
                    activeTab === techStack
                      ? "bg-white text-black" // Active state
                      : "bg-black text-white hover:bg-white hover:text-black hover:scale-95"
                  } mr-2 mb-2`}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.85 }}
              >
                {techStack}
              </motion.button>
            ))}
          </div>

          {/* Project Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-4 border border-blue-500 transition-all duration-300 rounded-xl hover:bg-gray-800"
                style={{ background: "rgba(0, 0, 0, 0.3)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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

