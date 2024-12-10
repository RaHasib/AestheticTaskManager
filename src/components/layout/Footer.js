import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-8 border-t border-[#DDA033]/30 bg-gradient-to-b from-transparent to-[#F5F2E9]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-[#065125]/70 flex items-center justify-center gap-2">
              Crafted with 
              <FavoriteIcon className="text-[#E2532F] text-sm animate-pulse" />
              by <a href="https://raisulhasib.dev" target="_blank" rel="noopener noreferrer" className="text-[#065125]/70 hover:underline">Raisul Amin Hasib</a>
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