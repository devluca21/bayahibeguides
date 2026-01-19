'use client';

import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white backdrop-blur-lg shadow-md py-3'
          : 'bg-white backdrop-blur-md py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Site Title and Logo */}
          <Link href="/" className="flex flex-row items-center gap-4 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <h1 className={`font-bold tracking-wider transition-all duration-300 text-lonely-navy group-hover:text-lonely-blue ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                BAYAHIBE
              </h1>
              <span className={`text-lonely-navy font-medium transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } group-hover:text-lonely-navy`}>
                GUIDES
              </span>
            </motion.div>
            {/* Logo next to text */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative flex-shrink-0"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -3, 0],
                  y: -4
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className={`relative transition-all duration-300 ${
                  isScrolled ? 'w-[72px] h-[72px]' : 'w-[96px] h-[96px]'
                }`}
              >
                {/* Animated glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-lonely-blue/0 via-lonely-blue/20 to-lonely-blue/0 blur-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: [0, 0.6, 0.4, 0.6],
                    scale: [0.8, 1.2, 1.1, 1.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <Image
                  src="/dominicus-logo.png"
                  alt="Dominicus Logo"
                  fill
                  className="object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500 relative z-10"
                  priority
                />
                
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-20"
                  initial={{ x: '-200%', opacity: 0 }}
                  whileHover={{ 
                    x: '200%',
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
              Destinations
            </a>
            <a href="#categories" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
              Categories
            </a>
            <a href="#about" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
              About
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-lonely-navy text-white rounded-full hover:bg-lonely-navy/90 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Search</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-lonely-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-lonely-blue"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#destinations" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
                  Destinations
                </a>
                <a href="#categories" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
                  Categories
                </a>
                <a href="#about" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
                  About
                </a>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-lonely-navy text-white rounded-full w-full">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Search</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}