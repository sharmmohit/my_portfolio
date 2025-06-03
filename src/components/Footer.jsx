import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Using Google Forms as a "backend" (frontend-only solution)
    const formData = new FormData();
    formData.append("entry.835906609", name); // Replace with your Google Form field IDs
    formData.append("entry.2016022936", email);
    

    fetch("https://docs.google.comforms/d/e/1FAIpQLSdroRyIUDSnDbR3pi_0pVRwuJ70zBqXCFijVo32tkXyEjhUKg/formResponse", { // Replace with your Google Form URL
      method: "POST",
      body: formData,
      mode: "no-cors" // Important for Google Forms to work
    })
    .then(() => {
      console.log("Form submitted to Google Sheets");
      setIsSubmitted(true);
      setIsLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset submission status after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      setIsLoading(false);
    });
  };

  return (
    <footer className="relative overflow-hidden text-white py-16 bg-black">
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
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              FIND ME ON
            </h2>
            <p className="mb-4 text-gray-300">Feel free to connect with me</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/sharmmohit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-pink-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Contact Me
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>
              {isSubmitted ? (
                <div className="text-green-400 mb-4">
                  Message sent successfully!
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
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
    </footer>
  );
};

export default Footer;