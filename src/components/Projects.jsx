import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

// Placeholder project data
const projects = [
  {
    title: 'InViTe',
    description: 'An automated event management system that simplifies event planning and registration. With features such as event creation, registration management, ticket booking, email notifications, and attendee tracking, event management is now a breeze for organizers and attendees alike.',
    tags: ['Next.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB'],
    githubLink: '#',
    liveLink: '#',
    image: '/path/to/your/image1.png'
  },
  {
    title: 'Project Two',
    description: 'A description for the second project. It solves a real-world problem with modern technologies and an intuitive user interface, focusing on performance and scalability.',
    tags: ['React', 'Firebase', 'Framer Motion'],
    githubLink: '#',
    liveLink: '#',
    image: '/path/to/your/image2.png'
  },
  {
    title: 'Project Three',
    description: 'This is the third project, demonstrating expertise in cloud services and serverless architecture. It features a robust backend and a dynamic, data-driven front-end.',
    tags: ['AWS', 'Lambda', 'React', 'GraphQL'],
    githubLink: '#',
    liveLink: '#',
    image: '/path/to/your/image3.png'
  }
];

const Projects = () => {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiperInstance) => {
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  };

  return (
    <section id="projects" className="py-20 px-8">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-text-primary text-center tracking-[0.3em] uppercase mb-16">
          Projects
        </h2>
        
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="w-full h-[300px] md:h-[450px] bg-secondary rounded-lg flex items-center justify-center p-8 shadow-lg">
                   <div className="w-full h-full bg-primary flex items-center justify-center rounded-md">
                    <span className="text-text-secondary">Project Image</span>
                   </div>
                </div>
                {/* Details Side */}
                <div>
                  <h3 className="text-4xl font-bold text-accent-orange mb-4">{project.title}</h3>
                  <p className="text-text-secondary mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => <span key={tag} className="bg-secondary text-text-secondary text-sm font-medium px-3 py-1 rounded-full">{tag}</span>)}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href={project.githubLink} className="text-text-primary hover:text-accent-orange transition-colors"><FaGithub size={24} /></a>
                    <a href={project.liveLink} className="text-text-primary hover:text-accent-orange transition-colors"><FiArrowUpRight size={24} /></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation */}
        <button 
          className={`swiper-button-prev-custom absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 z-10 transition-opacity ${isBeginning ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          disabled={isBeginning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          className={`swiper-button-next-custom absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 z-10 transition-opacity ${isEnd ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          disabled={isEnd}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default Projects; 