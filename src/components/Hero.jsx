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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.1, 0.7, 0.3, 1]
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative overflow-hidden text-white flex justify-center items-center h-[70vh] bg-black"
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(120)].map((_, i) => {
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
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={textVariantsLeft}
          >
            <span className="block">Hi There <motion.span 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >👋</motion.span></span>
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Mohit Sharma
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-semibold mb-2 min-h-[2.5rem]"
            variants={textVariantsLeft}
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
        </motion.div>

        {/* Right Side: Circular Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-10"></div>
            
            {/* Main image with floating animation */}
            <motion.img
              src={image}
              alt="Mohit Developer"
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-white/20 shadow-lg z-10"
              style={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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
    </motion.section>
  );
};

export default Hero;