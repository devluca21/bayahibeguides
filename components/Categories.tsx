'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Key, Building2, UtensilsCrossed, Sun, Map, Sparkles, Utensils, Newspaper } from 'lucide-react';

const categories = [
  { id: 'rentals', label: 'Rentals', icon: Key },
  { id: 'real-estate', label: 'Real Estate Agencies', icon: Building2 },
  { id: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed },
  { id: 'beaches', label: 'Beaches', icon: Sun },
  { id: 'excursions', label: 'Excursions', icon: Map },
  { id: 'vip-transport', label: 'VIP Transport Services', icon: Sparkles },
  { id: 'local-cuisine', label: 'Local Cuisine', icon: Utensils },
  { id: 'news', label: 'Bayahibe News', icon: Newspaper },
];

export default function Categories() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="categories" className="pt-0 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-wider mb-12 text-center text-lonely-black"
        >
          Explore by Category
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;
            
            const isRentals = category.id === 'rentals';
            const isRealEstate = category.id === 'real-estate';
            const isRestaurants = category.id === 'restaurants';
            const isNews = category.id === 'news';

            const cardContent = (
              <>
                {/* Darker blue background fill on hover */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#3B82F6' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.75 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Darker blue slider effect that slides across on hover */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#2563EB' }}
                  initial={{ x: '-100%', opacity: 1.0 }}
                  animate={{ 
                    x: isHovered ? '100%' : '-100%',
                    opacity: isHovered ? 1.0 : 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: 'easeInOut'
                  }}
                />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    animate={{ 
                      scale: isHovered ? 1.2 : 1,
                      rotate: isHovered ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                      isHovered ? 'text-white' : 'text-lonely-navy'
                    }`} />
                  </motion.div>
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${
                    isHovered ? 'text-white' : 'text-lonely-black'
                  }`}>
                    {category.label}
                  </span>
                </div>
              </>
            );

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredCard(category.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {isRentals ? (
                  <Link
                    href="/rentals"
                    className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10 block"
                  >
                    {cardContent}
                  </Link>
                ) : isRestaurants ? (
                  <Link
                    href="/restaurants"
                    className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10 block"
                  >
                    {cardContent}
                  </Link>
                ) : isRealEstate ? (
                  <Link
                    href="/real-estate"
                    className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10 block"
                  >
                    {cardContent}
                  </Link>
                ) : isNews ? (
                  <Link
                    href="/blog"
                    className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10 block"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <motion.button
                    onHoverStart={() => setHoveredCard(category.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.08, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10 w-full"
                  >
                    {cardContent}
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}