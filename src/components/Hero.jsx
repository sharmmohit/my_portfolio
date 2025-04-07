import React from 'react';
import image from './photo.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [developerText, setDeveloperText] = React.useState('MERN Stack Developer');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDeveloperText((prevText) =>
        prevText === 'MERN Stack Developer' ? 'Software Developer' : 'MERN Stack Developer'
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
    } else {
      controls.start({ opacity: 0, y: 30, transition: { duration: 0.4, ease: 'easeInOut' } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="text-white py-12 flex justify-center items-center h-[60vh]" // Adjusted height and padding
      style={{
        background: 'linear-gradient(135deg, #121212, #2c2c2c, #121212)',
        backgroundColor: '#121212', // Fallback color if gradient doesn't fully cover
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4"> {/* Added px-4 for padding */}
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left"> {/* Reduced mb */}
          <motion.h1
            className="text-4xl font-semibold mb-3" // Reduced mb
            initial={{ opacity: 0, x: -30 }} // Reduced x
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Hi There 👋<br />
            I am <span className="text-blue-500">Mohit Sharma</span>
          </motion.h1>

          <motion.div
            className="text-2xl font-semibold whitespace-nowrap overflow-hidden"
            initial={{ opacity: 0, x: 30 }} // Reduced x
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }} // Adjusted delay
          >
            <span>{developerText}</span>
          </motion.div>
        </div>

        {/* Right Side: Circular Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Mohit Developer"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-blue-500 shadow-lg" // Adjusted image size
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;