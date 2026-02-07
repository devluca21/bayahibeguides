'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, UtensilsCrossed, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { searchByKeyword, type SearchResult } from '@/lib/searchIndex';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchQuery.trim()) {
        setResults(searchByKeyword(searchQuery).slice(0, 10));
        setShowResults(true);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 150);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Background Image - Bayahibe Beach */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Bayahibe beach, Dominican Republic"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      {/* Overlay - More visible to fade background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
            <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider mb-4 text-lonely-black leading-tight"
            >
              Explore
              <br />
              <span className="text-lonely-navy block mt-2">Bayahibe</span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-light text-lonely-black/80 tracking-normal block mt-3">
                Dominican Republic
              </span>
            </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-lonely-black mb-12 max-w-2xl mx-auto font-medium"
          >
            Your complete guide to restaurants, beaches, diving, and Caribbean adventures
          </motion.p>

          {/* Search Bar */}
          <motion.div
            ref={containerRef}
            id="hero-search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-2 flex items-center gap-2 relative overflow-visible"
            whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-lonely-blue/0 via-lonely-blue/10 to-lonely-blue/0 opacity-0 rounded-2xl"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="flex items-center flex-1 px-4 py-3 relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MapPin className="w-5 h-5 text-lonely-navy mr-3 flex-shrink-0" />
              </motion.div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowResults(true)}
                placeholder="Search restaurants, beaches, activities, or tours..."
                className="flex-1 outline-none text-lonely-black placeholder:text-lonely-black/60 text-lg bg-transparent relative z-10 focus:placeholder:text-lonely-navy transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              aria-label="Search"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lonely-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-lonely-navy/90 transition-colors flex items-center gap-2 relative z-10 shadow-md hover:shadow-lg"
            >
              <Search className="w-5 h-5" />
              <motion.span
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Search
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Inline search results dropdown */}
          <AnimatePresence>
            {showResults && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-lonely-blue/20 overflow-hidden z-50 max-h-80 overflow-y-auto"
              >
                <ul>
                  {results.map((result) => (
                    <li key={result.id}>
                      <Link
                        href={result.link}
                        onClick={() => { setShowResults(false); setSearchQuery(''); }}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-lonely-blue/30 transition-colors text-left"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-lonely-black truncate">{result.title}</p>
                          {result.subtitle && (
                            <p className="text-sm text-lonely-black/60 truncate">{result.subtitle}</p>
                          )}
                          <p className="text-xs text-lonely-navy">{result.type}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick links to Restaurants and Beaches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <Link
              href="/restaurants"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lonely-blue/50 hover:bg-lonely-blue text-lonely-navy font-semibold transition-colors border border-lonely-navy/20"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Restaurants
            </Link>
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lonely-blue/50 hover:bg-lonely-blue text-lonely-navy font-semibold transition-colors border border-lonely-navy/20"
            >
              <Waves className="w-4 h-4" />
              Beaches & Activities
            </Link>
          </motion.div>

          {/* Circle logo - dead space between search and category */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center mt-0"
          >
            <Link
              href="/"
              className="group block"
              aria-label="Bayahibe Guides Home"
            >
              <motion.div
                className="relative w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem] lg:w-[44rem] lg:h-[44rem] mx-auto"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -8, 8, -4, 0],
                  y: -4,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-lonely-blue/0 via-lonely-blue/20 to-lonely-blue/0 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 0.6, 0.4] }}
                  transition={{ duration: 0.5 }}
                />
                <Image
                  src="/dominicus-logo.png"
                  alt="Bayahibe Guides"
                  fill
                  className="object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 relative z-10"
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}