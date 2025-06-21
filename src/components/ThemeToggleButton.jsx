import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-text-primary hover:text-accent-orange transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  );
};

export default ThemeToggleButton; 