import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaGithub, FaHotel } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Screenshot1 from '../assets/images/local_services/Screenshot_20250622_112148.png';
import Screenshot2 from '../assets/images/local_services/Screenshot_20250622_112336.png';
import Screenshot3 from '../assets/images/local_services/Screenshot_20250622_112319.png';
import ScreenshotM1 from '../assets/images/MyLib/Screenshot 2025-06-22 155212.png';
import ScreenshotM2 from '../assets/images/MyLib/Screenshot 2025-06-22 155229.png';
import LogforgeDashboard from '../assets/images/logforge/logforge_dashboard.jpeg';
import FindJobs1 from '../assets/images/find_jobs/photo_1_2025-10-24_22-11-03.jpg';
import FindJobs2 from '../assets/images/find_jobs/photo_2_2025-10-24_22-11-03.jpg';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LogForge – Unified Audit Logging (Django, Laravel)',
    description: `LogForge is a cross-framework audit logging package that records create, update, delete, restore, and force_delete events with diffs, actor, IP, and request context. It offers DB or queue-based writers (Celery), flexible include/exclude and redaction rules, pruning/archiving commands, and an optional dashboard UI. Available on PyPI and Packagist.`,
    tags: ['Django', 'Laravel', 'Audit Logging', 'Package'],
    githubLink: 'https://github.com/Ycrafts/LogForge',
    hostedLink: 'https://packagist.org/packages/logforge/logforge-laravel',
    images: [LogforgeDashboard],
    placeholder: true,
  },
  {
    title: 'Find Jobs Telegram Bot',
    description: `A modular Telegram bot that helps Ethiopian job seekers find relevant jobs based on their profile. It scrapes major job sites and Telegram channels, stores data in Supabase, matches jobs with AI (zero-shot by default), and sends alerts. Easy to run locally or deploy with Docker and Render/Railway.`,
    tags: ['Telegram', 'Python', 'Supabase', 'Scraping', 'AI Matching', 'Docker'],
    botLink: 'https://t.me/findmejobsbot',
    images: [FindJobs1, FindJobs2],
    placeholder: true,
  },
  {
    title: 'Local Services Aggregator System',
    description: 'This is a full-stack application that serves as a platform for aggregating local services. It connects customers who need services with local providers who can offer them. The system consists of a backend API built with Laravel and a mobile application for customers and providers built with Flutter.',
    tags: ['Laravel', 'Laravel-Filament', 'Flutter', 'Postgresql'],
    githubLink: 'https://github.com/Ycrafts/Local_Services_Aggregator_System',
    liveLink: '#',
    images: [Screenshot1, Screenshot2, Screenshot3],
  },
  {
    title: 'MyLib - Personal Digital Library',
    description: `MyLib is a modern Django-based web application for managing your personal digital library. Discover new books, keep track of your favorites, and enjoy a world of reading at your fingertips.\n\nFeatures include user authentication (sign up, login, logout), searching for books, viewing book details, downloading book PDFs, managing favorites, and a responsive, modern UI.`,
    tags: ['Django', 'Python', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Ycrafts/MyLib',
    images: [ScreenshotM1, ScreenshotM2],
  },
  {
    title: 'HotelEcom',
    description: `⚠️ NOTICE: This project is an ongoing work-in-progress and is far from complete. Many features are incomplete or subject to change.\n\nHotelEcom is a Django-based e-commerce platform tailored for hotel-related products and services. The project is modular, with separate apps for accounts, products, orders, payments, notifications, and reviews.\n\nFeatures (Planned & In Progress):\n- User account management and authentication\n- Product listings and management\n- Order processing\n- Payment integration\n- Notifications system\n- Product reviews`,
    tags: ['Django', 'E-commerce', 'Python'],
    githubLink: 'https://github.com/Ycrafts/Hotel-Supplies-Ecommerce',
    images: [],
    placeholder: true,
  },
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
                {project.title.includes('Employee Management System') || project.title.includes('MyLib') ? (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full h-[300px] md:h-[450px] flex items-center justify-center p-0 relative"
                  >
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-[#7c5a36] to-white dark:from-[#e7dac5] dark:to-black" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-6 group">
                      <div className="w-full h-full rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_12px_48px_0_rgba(80,60,30,0.28)]">
                        <HoverImageSwitcher images={project.images} title={project.title} />
                      </div>
                    </div>
                  </motion.div>
                ) : project.title.includes('HotelEcom') ? (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full h-[300px] md:h-[450px] flex items-center justify-center p-0 relative"
                  >
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-[#e0c3a3] to-[#f5ede6] dark:from-[#3a2c1a] dark:to-black" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-6 group">
                      <div className="w-full h-full rounded-2xl shadow-2xl flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_12px_48px_0_rgba(80,60,30,0.28)] bg-transparent">
                        <FaHotel className="text-8xl text-[#bfa77a] dark:text-[#e7dac5] mb-4" />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full h-[300px] md:h-[450px] flex items-center justify-center rounded-none bg-transparent p-0"
                  >
                    <div className="w-full h-full flex items-center justify-center gap-0 bg-transparent rounded-none">
                      {project.images ? (
                        project.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={project.title + ' screenshot ' + (i + 1)}
                            className="object-contain h-full max-h-[450px] w-full bg-white"
                            style={{ width: `${100 / (project.images.length || 1)}%`, border: 'none', borderRadius: 0, boxShadow: 'none', background: 'none', margin: 0, padding: 0 }}
                          />
                        ))
                      ) : (
                        project.image && (
                          <img
                            src={project.image}
                            alt={project.title + ' screenshot'}
                            className="object-contain h-full max-h-[450px] w-full bg-white"
                            style={{ width: '100%', border: 'none', borderRadius: 0, boxShadow: 'none', background: 'none', margin: 0, padding: 0 }}
                          />
                        )
                      )}
                    </div>
                  </motion.div>
                )}
                {/* Details Side */}
                <div>
                  <h3 className="text-4xl font-bold text-accent-orange mb-4">{project.title}</h3>
                  <p className="text-text-secondary mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => <span key={tag} className="bg-secondary text-text-secondary text-sm font-medium px-3 py-1 rounded-full">{tag}</span>)}
                  </div>
                  <div className="flex items-center space-x-4">
                    {project.githubLink && (
                      <a href={project.githubLink} className="text-text-primary hover:text-accent-orange transition-colors" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                    )}
                    {project.hostedLink && (
                      <a href={project.hostedLink} className="text-text-primary hover:text-accent-orange transition-colors" target="_blank" rel="noopener noreferrer">
                        <FiArrowUpRight size={22} />
                      </a>
                    )}
                    {project.botLink && (
                      <a href={project.botLink} className="text-text-primary hover:text-accent-orange transition-colors" target="_blank" rel="noopener noreferrer">
                        <FiArrowUpRight size={22} />
                      </a>
                    )}
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

function HoverImageSwitcher({ images, title }) {
  const [index, setIndex] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  const [loaded, setLoaded] = React.useState(Array(images.length).fill(false));

  React.useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1000); // 1 second per image
    return () => clearInterval(interval);
  }, [hovered, images.length]);

  React.useEffect(() => {
    if (!hovered) setIndex(0);
  }, [hovered]);

  const handleImageLoad = (i) => {
    setLoaded((prev) => {
      const arr = [...prev];
      arr[i] = true;
      return arr;
    });
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center aspect-video"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: images.length > 1 ? 'pointer' : 'default', position: 'relative' }}
    >
      {images.map((img, i) => (
        <React.Fragment key={i}>
          {!loaded[i] && (
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-full bg-gray-200 animate-pulse rounded-xl z-0`}
              style={{ border: 'none', borderRadius: 0, boxShadow: 'none', background: 'none', margin: 'auto', padding: 0 }}
            />
          )}
          <img
            src={img}
            alt={title + ' screenshot ' + (i + 1)}
            onLoad={() => handleImageLoad(i)}
            className={`object-contain max-h-full max-w-full transition-opacity duration-700 absolute top-0 left-0 right-0 bottom-0 m-auto ${i === index && loaded[i] ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ border: 'none', borderRadius: 0, boxShadow: 'none', background: 'none', margin: 'auto', padding: 0 }}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects; 