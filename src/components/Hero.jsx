import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
      
      {/* Decorative Framing Curves */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[700px] h-[600px] md:w-[900px] md:h-[750px] border-2 border-accent-orange animate-blob opacity-20"></div>
        <div className="absolute top-0 left-0 w-[800px] h-[700px] md:w-[1200px] md:h-[1000px] border border-secondary animate-blob-slow opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-40 h-40 mb-6 rounded-full bg-secondary flex items-center justify-center shadow-lg">
          <span className="text-text-secondary">Photo</span>
        </div>

        <p className="font-fun text-3xl text-accent-orange mb-4">
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