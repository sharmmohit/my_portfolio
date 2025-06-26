// src/components/GitHubContributions.jsx
import React from "react";
import { motion } from "framer-motion";

const Github = () => {
  const githubUsername = "sharmmohit"; // Change this to your GitHub username
  const svgUrl = `https://ghchart.rshah.org/${githubUsername}`;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-4xl"
      >
        <motion.h2
          className="text-3xl font-bold text-white mb-6 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          GitHub Contributions
        </motion.h2>

        <motion.div
          className="flex justify-center overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src={svgUrl}
            alt="GitHub Contributions Graph"
            className="w-full max-w-3xl border-2 border-gray-700 rounded-md"
          />
        </motion.div>

        <p className="mt-6 text-center text-gray-400 text-sm">
          GitHub contribution data powered by{" "}
          <a
            href="https://ghchart.rshah.org/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ghchart.rshah.org
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Github;
