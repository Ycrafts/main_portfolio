import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 z-10">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-6">
          <ThemeToggleButton />
          <a href="https://www.linkedin.com/in/yonatan-assefa-mekonnen/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-orange transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ycrafts/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-orange transition-colors">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 