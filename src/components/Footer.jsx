import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send email, save to database)
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer
      className="text-white py-16"
      style={{
        background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)", // Gradient background
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">FIND ME ON</h2>
            <p className="mb-4">Feel free to connect with me</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/sharmmohit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;