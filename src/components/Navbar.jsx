import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(255,182,193,0.3)] px-6 py-3 rounded-full flex justify-between items-center">
        <motion.span 
          whileHover={{ scale: 1.1, rotate: -2 }}
          className="text-xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          K-DRMA ✨
        </motion.span>
        
        <div className="flex space-x-6 text-sm font-bold text-gray-700">
          {['Home', 'Watchlist', 'Gallery'].map((item) => (
            <motion.a 
              key={item} 
              whileHover={{ y: -2, color: '#ec4899' }}
              href="#" 
              className="transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;