'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-lonely-blue/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wider mb-6 text-lonely-black">
            About Bayahibe Guides
          </h2>
          <p className="text-lg text-lonely-black/80 leading-relaxed">
            This is a community-oriented site built with input from many expats and residents who live in Bayahibe.
            Together we share the best of Bayahibe & Dominicus—from beaches and diving to restaurants and vacation rentals—to help you plan the perfect Caribbean getaway.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
