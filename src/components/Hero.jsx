import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from './photo.png';

const Hero = () => {
  const [developerText, setDeveloperText] = useState('MERN Stack Developer');
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

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

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden text-white flex justify-center items-center h-[65vh] min-h-[500px] bg-black"
    >
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

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-10">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            transition={{ delay: 0.4 }}
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

        {/* Right Side: Enhanced Image Animation */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            
            {/* Main image */}
            <motion.img
              src={image}
              alt="Mohit Developer"
              className="relative rounded-full border-4 border-cyan-400 shadow-xl w-48 h-48 md:w-56 md:h-56 object-cover z-10"
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
            />
          </motion.div>
        </div>
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
  );
};

export default Hero;