import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { FaThumbsUp } from 'react-icons/fa';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isProfileHover, setIsProfileHover] = useState(false);

  const mouse = {
    x: useSpring(0, { stiffness: 1000, damping: 40 }),
    y: useSpring(0, { stiffness: 1000, damping: 40 }),
  };

  useEffect(() => {
    const manageMouseMove = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    window.addEventListener('mousemove', manageMouseMove);
    
    const hoverElements = document.querySelectorAll('a, button');
    const profileImg = document.querySelector('img[alt="Profile"]');

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);
    const onProfileEnter = () => setIsProfileHover(true);
    const onProfileLeave = () => setIsProfileHover(false);

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
    if (profileImg) {
      profileImg.addEventListener('mouseenter', onProfileEnter);
      profileImg.addEventListener('mouseleave', onProfileLeave);
    }

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      if (profileImg) {
        profileImg.removeEventListener('mouseenter', onProfileEnter);
        profileImg.removeEventListener('mouseleave', onProfileLeave);
      }
    };
  }, []);

  const size = isProfileHover ? 60 : isHovering ? 50 : 25;
  const borderWidth = isProfileHover ? '0px' : isHovering ? '3px' : '2px';
  const background = isProfileHover ? 'rgba(255,255,255,0.95)' : 'transparent';

  return (
    <motion.div
      className="fixed pointer-events-none z-50 border-accent-orange animate-blob flex items-center justify-center"
      style={{
        left: mouse.x,
        top: mouse.y,
        x: '-50%',
        y: '-50%',
        pointerEvents: 'none',
        background,
        willChange: 'transform',
      }}
      animate={{
        width: size,
        height: size,
        borderWidth: borderWidth,
        borderRadius: isProfileHover ? '20px' : '50%',
        boxShadow: isProfileHover ? '0 4px 24px 0 rgba(0,0,0,0.10)' : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {isProfileHover && (
        <motion.span
          initial={{ scale: 0.7 }}
          animate={{ scale: [1.1, 0.9, 1.15, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <FaThumbsUp size={32} color="#E95A2B" />
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor; 