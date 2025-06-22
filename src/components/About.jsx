import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ProfileImg from '../assets/images/profile.jpg';

const About = () => {
  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-20 px-8 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Column */}
        <motion.div 
          className="flex items-center justify-center bg-secondary rounded-xl shadow-lg mx-auto max-w-[350px] max-h-[500px] overflow-hidden relative"
          style={{ width: 'auto', height: 'auto' }}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img src={ProfileImg} alt="Profile" className="object-contain max-w-full max-h-[500px] rounded-xl z-10" />
            <div className="absolute inset-0 rounded-xl pointer-events-none z-20 border-4 border-accent-orange" />
            <div className="absolute left-0 top-0 w-16 h-16" style={{background: 'radial-gradient(circle at top left, rgba(255,255,255,0.0) 60%, rgba(255,255,255,1) 100%)'}} />
            <div className="absolute right-0 top-0 w-16 h-16" style={{background: 'radial-gradient(circle at top right, rgba(255,255,255,0.0) 60%, rgba(255,255,255,1) 100%)'}} />
            <div className="absolute left-0 bottom-0 w-16 h-16" style={{background: 'radial-gradient(circle at bottom left, rgba(255,255,255,0.0) 60%, rgba(255,255,255,1) 100%)'}} />
            <div className="absolute right-0 bottom-0 w-16 h-16" style={{background: 'radial-gradient(circle at bottom right, rgba(255,255,255,0.0) 60%, rgba(255,255,255,1) 100%)'}} />
          </div>
        </motion.div>

        {/* Text Content Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Here is a little <span className="relative inline-block">
              background
              <span className="absolute bottom-[-4px] left-0 w-full h-1 bg-accent-orange"></span>
            </span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            As a pre-final year Software Engineering student at Bahir Dar University, I have a deep-seated passion for solving complex problems and building things that last. I truly enjoy the challenge of designing and playing with data, architecting database schemas that are both efficient and scalable.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            While I am proficient across a wide variety of programming languages and frameworks, my greatest strength lies in collaboration. I excel in team environments where I can contribute to a shared vision and learn from others. I am now eager to bring my technical skills and collaborative spirit to the software industry and begin tackling real-world challenges.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            When I'm not coding, you can usually find me playing bass guitar with my band or hanging out with my friends and families.
          </p>
          <a
            href={"/src/assets/Yonatan-Assefa-Mekonnen-Resume .pdf"}
            className="flex items-center space-x-2 bg-accent-orange text-white font-bold py-3 px-3 rounded-lg hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>Resume</span>
            <FiArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 