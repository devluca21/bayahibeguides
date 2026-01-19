'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

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
            Your complete guide to beaches, diving, and Caribbean adventures
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-2 flex items-center gap-2 relative overflow-hidden"
            whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-lonely-blue/0 via-lonely-blue/10 to-lonely-blue/0 opacity-0"
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
                placeholder="Search activities, tours, or beaches..."
                className="flex-1 outline-none text-lonely-black placeholder:text-lonely-black/60 text-lg bg-transparent relative z-10 focus:placeholder:text-lonely-navy transition-colors"
              />
            </div>
            <motion.button
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
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}