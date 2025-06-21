import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 px-8">
      <div className="container mx-auto text-center text-text-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/yonatan-assefa-mekonnen/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ycrafts/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">
            <FaGithub size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Yonatan Assefa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 