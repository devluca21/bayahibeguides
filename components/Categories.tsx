'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Key, Building2, UtensilsCrossed, Sun, Map, Sparkles, Newspaper } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const VIP_WHATSAPP_NUMBER = '18293879310';
const VIP_WHATSAPP_LINK = `https://wa.me/${VIP_WHATSAPP_NUMBER}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const categories = [
  { id: 'rentals', labelKey: 'rentals' as const, icon: Key },
  { id: 'real-estate', labelKey: 'realEstate' as const, icon: Building2 },
  { id: 'restaurants', labelKey: 'restaurants' as const, icon: UtensilsCrossed },
  { id: 'beaches', labelKey: 'beaches' as const, icon: Sun },
  { id: 'excursions', labelKey: 'excursions' as const, icon: Map },
  { id: 'vip-transport', labelKey: 'vipTransport' as const, icon: Sparkles },
  { id: 'news', labelKey: 'bayahibeNews' as const, icon: Newspaper },
];

export default function Categories() {
  const { t } = useLanguage();
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
          {t.categories.title}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;
            
            const isRentals = category.id === 'rentals';
            const isRealEstate = category.id === 'real-estate';
            const isRestaurants = category.id === 'restaurants';
            const isNews = category.id === 'news';
            const isVipTransport = category.id === 'vip-transport';

            const cardContent = isVipTransport ? (
              <>
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#3B82F6' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.75 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#2563EB' }}
                  initial={{ x: '-100%', opacity: 1.0 }}
                  animate={{ 
                    x: isHovered ? '100%' : '-100%',
                    opacity: isHovered ? 1.0 : 0
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center space-y-4">
                  <motion.div
                    className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                    animate={{ scale: isHovered ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/VIP Driver.png"
                      alt="VIP Driver"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </motion.div>
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${
                    isHovered ? 'text-white' : 'text-lonely-black'
                  }`}>
                    {t.categories[category.labelKey]}
                  </span>
                  <span
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-medium shadow-sm pointer-events-none"
                    aria-hidden
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </span>
                </div>
              </>
            ) : (
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

                <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center space-y-4">
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
                    {t.categories[category.labelKey]}
                  </span>
                </div>
              </>
            );

            return (
              <motion.div
                key={category.id}
                className="flex h-full min-h-0"
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
                    className="relative flex flex-col min-h-[11.5rem] sm:min-h-[12rem] h-full w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10"
                  >
                    {cardContent}
                  </Link>
                ) : isRestaurants ? (
                  <Link
                    href="/restaurants"
                    className="relative flex flex-col min-h-[11.5rem] sm:min-h-[12rem] h-full w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10"
                  >
                    {cardContent}
                  </Link>
                ) : isRealEstate ? (
                  <Link
                    href="/real-estate"
                    className="relative flex flex-col min-h-[11.5rem] sm:min-h-[12rem] h-full w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10"
                  >
                    {cardContent}
                  </Link>
                ) : isNews ? (
                  <Link
                    href="/blog"
                    className="relative flex flex-col min-h-[11.5rem] sm:min-h-[12rem] h-full w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10"
                  >
                    {cardContent}
                  </Link>
                ) : isVipTransport ? (
                  <Link
                    href="/vip-transport"
                    className="relative flex flex-col min-h-[11.5rem] sm:min-h-[12rem] h-full w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <motion.button
                    onHoverStart={() => setHoveredCard(category.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.08, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex flex-col min-h-[11.5rem] sm:min-h-[12rem] h-full w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group overflow-hidden border border-lonely-black/10"
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