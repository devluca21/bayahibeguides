'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RealEstateHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-lonely-blue/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-lonely-navy hover:text-lonely-navy/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="w-12 h-12 text-lonely-navy" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-lonely-black">
              Real Estate Agencies
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-lonely-black/70 max-w-3xl mx-auto">
            Discover trusted real estate agencies in Bayahibe. Find your perfect property with professional guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
