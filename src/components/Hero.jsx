import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from './photo.png';

const Hero = () => {
  const [developerText, setDeveloperText] = useState('MERN Stack Developer');

  const textVariants = [
    'MERN Stack Developer',
    'Software Engineer',
    'Web Developer',
    'JavaScript Expert'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % textVariants.length;
      setDeveloperText(textVariants[currentIndex]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Navbar Spacer - Matches navbar height */}
      <div className="h-20"></div>
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden text-white bg-black"
      >
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => {
            const size = Math.random() * 1.5;
            const left = `${Math.random() * 100}%`;
            const top = `${Math.random() * 100}%`;
            const opacity = Math.random() * 0.8 + 0.2;
            const animationDelay = `${Math.random() * 3}s`;
            const animationDuration = `${3 + Math.random() * 7}s`;
            
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

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                <span className="block">Hi There <motion.span 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                  className="inline-block"
                >👋</motion.span></span>
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Mohit Sharma
                </span>
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl font-semibold mb-6 min-h-[2.5rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  key={developerText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                    {developerText}
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Image with Enhanced Animation */}
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"
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
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
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
                      x: Math.random() * 60 - 30,
                      y: Math.random() * 60 - 30,
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                    style={{
                      width: `${Math.random() * 4 + 3}px`,
                      height: `${Math.random() * 4 + 3}px`,
                    }}
                  />
                ))}
                
                {/* Main image */}
                <motion.img
                  src={image}
                  alt="Mohit Developer"
                  className="relative rounded-full border-4 border-cyan-400 shadow-xl w-48 h-48 md:w-56 md:h-56 object-cover z-10"
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}</style>
      </motion.section>
    </>
  );
};

export default Hero;