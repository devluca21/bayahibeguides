'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Shield, Award, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-lonely-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold tracking-wider mb-4">BAYAHIBE</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted guide to discovering the best of Bayahibe & Dominicus in the Dominican Republic.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4 tracking-wide">Support</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4 tracking-wide">Trusted By</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Shield className="w-4 h-4" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Award className="w-4 h-4" />
                <span>Verified Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Globe className="w-4 h-4" />
                <span>Global Coverage</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="#"
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/60"
          >
            © {new Date().getFullYear()} Bayahibe Guides. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}