import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import MeImg from '../assets/images/me.JPG';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
      
      {/* Decorative Framing Curves */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <svg viewBox="0 0 600 500" width="600" height="500" className="blob-bg">
          <path fill="#E95A2B" fillOpacity="0.08" d="M421.5,41.5Q484,83,497,166.5Q510,250,453,312.5Q396,375,308,420Q220,465,144,410Q68,355,61,252.5Q54,150,134,90Q214,30,308,32Q402,34,421.5,41.5Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-56 h-56 mb-6 rounded-full bg-secondary flex items-center justify-center shadow-lg overflow-hidden">
          <img src={MeImg} alt="Yonatan Assefa" className="object-cover w-full h-full bg-secondary scale-110" style={{ borderRadius: '50% 60% 55% 45% / 60% 50% 55% 45%' }} />
        </div>

        <p className="uppercase tracking-widest font-bold text-accent-orange text-base md:text-lg mb-4">
          Full-Stack Developer with Backend Specialization
        </p>

        {/* Typewriter Effect */}
        <TypeAnimation
          sequence={[
            'Hey there, I\'m Yonatan Assefa',
            2000,
            'I build things for the web.',
            2000,
            'I make scalable APIs',
            2000,
            'I also build interactive websites',
            2000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-5xl md:text-7xl font-bold text-text-primary mb-8"
          repeat={Infinity}
        />

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-text-secondary uppercase tracking-widest text-sm">
          <a href="#about" className="hover:text-accent-orange transition-colors">About</a>
          <a href="#skills" className="hover:text-accent-orange transition-colors">Skills & Experience</a>
          <a href="#projects" className="hover:text-accent-orange transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent-orange transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 