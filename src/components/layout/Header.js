import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Header() {
  const isMobile = useMediaQuery('(max-width:640px)');

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const title = "Aesthetic Task Manager";

  return (
    <header className="py-6 sm:py-8 text-center relative">
      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#DDA033] to-transparent"
      />

      <div className="relative">
        {/* Book icons decoration */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AutoStoriesIcon 
              className="text-[#DDA033] transform -rotate-12"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <MenuBookIcon 
              className="text-[#065125]"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
            />
          </motion.div>
        </div>

        {/* Main title with letter animation */}
        <motion.h1 
          className="vintage-heading relative inline-block pt-4"
          initial="hidden"
          animate="visible"
        >
          <span className="text-3xl sm:text-5xl font-playfair text-[#2C1810] relative inline-block">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                className="inline-block hover:text-[#DDA033] transition-colors duration-300"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          
          {/* Underline decoration */}
          <motion.span 
            className="absolute -bottom-3 left-0 right-0 h-[2px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              background: 'linear-gradient(90deg, transparent, #DDA033 20%, #065125 80%, transparent)'
            }}
          />
        </motion.h1>
      </div>

      {/* Subtitle with fade in */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 text-[#065125]/70 font-serif italic text-base sm:text-xl"
      >
        <span className="relative">
          Organize your tasks with elegance
          <motion.span
            className="absolute -bottom-1 left-0 right-0 h-px bg-[#065125]/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </span>
      </motion.p>

      {/* Feature descriptions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6"
      >
        {[
          { icon: "✨", text: "Drag to reorder", color: "DDA033" },
          { icon: "📝", text: "Click to expand", color: "E2532F" }
        ].map((feature, index) => (
          <motion.div 
            key={index}
            className="feature-item"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`
              text-sm sm:text-base text-[#065125]/60 
              flex items-center gap-2 px-4 py-2 rounded-full 
              bg-[#${feature.color}]/10 hover:bg-[#${feature.color}]/20
              transition-colors duration-300
            `}>
              <span className="text-lg">{feature.icon}</span>
              {feature.text}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#065125]/20 to-transparent"
      />
    </header>
  );
}

export default Header; 