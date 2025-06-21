import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaGithub, FaPython, FaJava, FaPhp, FaLaravel, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiDjango, SiSpringboot, SiFlutter, SiPostgresql, SiCplusplus } from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";
import { TbApi } from 'react-icons/tb';

const skills = [
  { name: 'Git & Github', icon: <FaGithub size={40} /> },
  { name: 'JavaScript', icon: <IoLogoJavascript size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Django & DRF', icon: <SiDjango size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={40} /> },
  { name: 'PHP', icon: <FaPhp size={40} /> },
  { name: 'Laravel', icon: <FaLaravel size={40} /> },
  { name: 'Flutter', icon: <SiFlutter size={40} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
  { name: 'MS SQL Server', icon: <DiMsqlServer size={40} /> },
  { name: 'C++', icon: <SiCplusplus size={40} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} /> },
  { name: 'REST APIs', icon: <TbApi size={40} /> },
];

const experiences = [
    { year: '2025', role: 'Intern', company: 'Quantum Technologies PLC' },
];

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ease: "easeOut"
    }
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16">
          Skills &amp; Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-12">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="flex flex-col items-center text-center group"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-2 shadow-lg group-hover:bg-accent-orange/20 transition-colors text-text-secondary group-hover:text-accent-orange">
                  {skill.icon}
                </div>
                <p className="text-text-secondary text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div>
            {experiences.map((exp, index) => (
              <div key={index} className="flex space-x-6 mb-8 relative">
                 <div className="absolute left-[-22px] top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                 <div className="w-4 h-4 rounded-full bg-accent-orange absolute left-[-29px] top-1.5 ring-4 ring-primary"></div>
                <p className="text-accent-orange font-bold min-w-[60px]">{exp.year}</p>
                <div>
                  <h3 className="font-bold text-text-primary text-xl">{exp.role}</h3>
                  <p className="text-text-secondary">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills; 