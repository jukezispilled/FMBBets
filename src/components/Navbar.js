import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`absolute top-0 z-50 w-full py-4 ${isHomePage ? 'bg-transparent !important' : 'bg-zinc-950'}`}>
      <div className="container mx-auto flex items-center justify-between px-8 md:px-[10%]">
        <div className="flex items-center">
          <a href="/" className="font-normal text-6xl text-white lg:text-7xl font-custom tracking-wide">
            FMB
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
        <button onClick={toggleMenu} type="button" className="text-white focus:outline-none">
            <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{ d: 'M6 9l6 6 6-6' }}
                animate={{ d: isOpen ? 'M6 9l6 6 6-6' : 'M4 6h16M4 12h16m-7 6h7' }}
                transition={{ duration: 0.25 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            ></motion.path>
            </svg>
        </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 text-xl md:text-3xl font-[500] text-white font-custom tracking-wide">
          <a href="/" className="">
            Home
          </a>
          <a href="/plays" className="">
            Plays
          </a>
          <a href="/faqs" className="">
            FAQs
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div
            key="mobileMenu"
            className={`md:hidden px-8 pt-3 pb-2 text-xl lg:text-3xl text-white font-custom tracking-wide ${
              isHomePage ? '-mt-4 bg-transparent !important' : 'bg-zinc-950'
            }`}
          >
            <a href="/" className="block py-1">
              Home
            </a>
            <a href="/plays" className="block py-1">
              Plays
            </a>
            <a href="/faqs" className="block py-1">
              FAQs
            </a>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;