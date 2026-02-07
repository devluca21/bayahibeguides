'use client';

import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#destinations" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
              Destinations
            </Link>
            <Link href="/#categories" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
              Categories
            </Link>
            <Link href="/#about" className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
              About
            </Link>
            <Link
              href="/#hero-search"
              className="flex items-center space-x-2 px-4 py-2 bg-lonely-navy text-white rounded-full hover:bg-lonely-navy/90 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Search</span>
            </Link>
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
                <Link href="/#destinations" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
                  Destinations
                </Link>
                <Link href="/#categories" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
                  Categories
                </Link>
                <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-lonely-black hover:text-lonely-navy transition-colors">
                  About
                </Link>
                <Link href="/#hero-search" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center space-x-2 px-4 py-2 bg-lonely-navy text-white rounded-full w-full">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Search</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}