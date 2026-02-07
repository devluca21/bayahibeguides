'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface RealEstateAgency {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  whatsapp: string;
}

const agencies: RealEstateAgency[] = [
  {
    id: 'c21-sunsets',
    name: 'Century 21 Sunsets',
    description: 'Your trusted real estate partner in Bayahibe',
    url: 'https://c21sunsets.com/en/',
    image: '/century21-logo.png',
    whatsapp: '18494490596',
  },
  {
    id: 'luciano-aquino',
    name: 'Luciano Aquino Inversiones',
    description: 'Premium real estate investments in Bayahibe',
    url: 'https://lucianoaquinoinversiones.com/nosotros',
    image: '/luciano-aquino-logo.png',
    whatsapp: '18299703345',
  },
  {
    id: 'perez-real-estate',
    name: 'Perez Real Estate',
    description: 'Excellent service provided by professionals! Totally safe and help you with legal procedures. Best in Bayahibe to purchase a property.',
    url: 'https://www.google.com/maps/search/Perez+Real+Estate+Aparthotel+Los+Flamencos+Dominicus',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    whatsapp: '18496354655',
  },
  {
    id: 'dreaming-caraibi',
    name: 'Dreaming Caraibi Real Estate',
    description: 'Excellent service. Very professional staff everyone so kind! Agenzia Immobiliare in the Dominican Republic.',
    url: 'https://www.google.com/maps/search/Dreaming+Caraibi+Real+Estate+Av+Fuller+Dominicus',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    whatsapp: '18494255821',
  },
];

export default function RealEstateList() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agencies.map((agency, index) => {
            const isHovered = hoveredCard === agency.id;
            
            return (
              <motion.div
                key={agency.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredCard(agency.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer block relative border border-lonely-black/10"
              >
                {/* Sliding blue effect on hover */}
                <motion.div
                  className="absolute inset-0 z-0"
                  style={{ backgroundColor: '#3B82F6' }}
                  initial={{ x: '-100%', opacity: 0.75 }}
                  animate={{ 
                    x: isHovered ? '100%' : '-100%',
                    opacity: isHovered ? 0.75 : 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: 'easeInOut'
                  }}
                />

                {/* Logo Section - Square with full logo display */}
                <div className="relative w-full aspect-square overflow-hidden bg-white rounded-t-2xl z-10">
                  <Image
                    src={agency.image}
                    alt={agency.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold tracking-wide mb-2 text-lonely-black">
                    {agency.name}
                  </h3>
                  <p className="text-sm text-lonely-black/60 mb-6">
                    {agency.description}
                  </p>

                  {/* Two side-by-side action cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Visit Website Card */}
                    <motion.a
                      href={agency.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onHoverStart={() => setHoveredButton(`${agency.id}-website`)}
                      onHoverEnd={() => setHoveredButton(null)}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="bg-lonely-navy hover:bg-lonely-navy/90 text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-300 flex flex-col items-center justify-center gap-1.5 group/btn shadow-sm hover:shadow-md relative overflow-hidden border border-lonely-black/10"
                    >
                      {/* Subtle sliding effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        animate={{ 
                          x: hoveredButton === `${agency.id}-website` ? '100%' : '-100%'
                        }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      />
                      <ExternalLink className="w-5 h-5 relative z-10 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                      <span className="text-xs text-center relative z-10">Visit Website</span>
                    </motion.a>

                    {/* WhatsApp Contact Card */}
                    <motion.a
                      href={`https://wa.me/${agency.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onHoverStart={() => setHoveredButton(`${agency.id}-whatsapp`)}
                      onHoverEnd={() => setHoveredButton(null)}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-300 flex flex-col items-center justify-center gap-1.5 group/whatsapp shadow-sm hover:shadow-md relative overflow-hidden border border-lonely-black/10"
                    >
                      {/* Subtle sliding effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        animate={{ 
                          x: hoveredButton === `${agency.id}-whatsapp` ? '100%' : '-100%'
                        }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      />
                      <MessageCircle className="w-5 h-5 relative z-10 group-hover/whatsapp:scale-105 transition-transform duration-300" />
                      <span className="text-xs text-center relative z-10">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
