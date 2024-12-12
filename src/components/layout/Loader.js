import React from 'react';
import { motion } from 'framer-motion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#F5F2E9] z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <AutoStoriesIcon 
            className="text-[#DDA033]"
            sx={{ fontSize: '3rem' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="vintage-loader-container">
            <div className="vintage-loader-inner">
              <div className="vintage-loader-line"></div>
              <div className="vintage-loader-line"></div>
              <div className="vintage-loader-line"></div>
            </div>
          </div>
          <p className="mt-4 text-[#2C1810]/70 font-serif italic text-sm">
            Loading your tasks...
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Loader; 