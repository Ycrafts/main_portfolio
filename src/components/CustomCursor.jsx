import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // A very stiff spring for near-instant tracking with a subtle bounce
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
    
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  const size = isHovering ? 50 : 25;
  const borderWidth = isHovering ? '3px' : '2px';

  return (
    <motion.div
      className="fixed pointer-events-none z-50 border-accent-orange animate-blob"
      style={{
        left: mouse.x,
        top: mouse.y,
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        borderWidth: borderWidth,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    ></motion.div>
  );
};

export default CustomCursor; 