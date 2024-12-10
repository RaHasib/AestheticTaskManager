import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-8 border-t border-[#DDA033]/30 bg-gradient-to-b from-transparent to-[#F5F2E9]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6">

          <div className="flex items-center gap-4">
            <Tooltip title="View Source" arrow>
              <IconButton 
                className="vintage-icon hover:scale-110 transition-transform"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Connect on LinkedIn" arrow>
              <IconButton 
                className="vintage-icon hover:scale-110 transition-transform"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#DDA033]/30 to-transparent 
               hover:w-32 transition-all duration-300"></div>


          <div className="text-center space-y-2">
            <p className="text-sm text-[#065125]/70 flex items-center justify-center gap-2">
              Crafted with 
              <FavoriteIcon className="text-[#E2532F] text-sm animate-pulse" />
              by Your Name
            </p>
          
            <p className="text-xs text-[#065125]/40 font-serif">
              © {currentYear} | Aesthetic Task Manager.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 