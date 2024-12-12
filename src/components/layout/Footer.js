import React from 'react';
import { motion } from 'framer-motion';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 relative">
      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#DDA033]/30 to-transparent"
      />

      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-[#2C1810]/70 font-serif flex items-center justify-center gap-2">
            <span>Made with</span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <FavoriteIcon 
                className="text-[#E2532F]" 
                sx={{ fontSize: '1rem' }}
              />
            </motion.span>
            <span>by</span>
            <a 
              href="https://www.raisulhasib.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#DDA033] hover:text-[#E2532F] transition-colors duration-300 vintage-text"
            >
             Raisul Amin Hasib
            </a>
          </p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 text-xs text-[#2C1810]/50 font-serif"
          >
            <span className="vintage-text">© {currentYear} Aesthetic Task Manager.</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 opacity-30">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#DDA033]"
        >
          ❦
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#DDA033]"
        >
          ❦
        </motion.span>
      </div>
    </footer>
  );
}

export default Footer;