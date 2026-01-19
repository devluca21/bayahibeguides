'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Star } from 'lucide-react';
import Image from 'next/image';

interface Destination {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Saona Island Day Trip',
    location: 'Bayahibe',
    price: '$89',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    category: 'Island Tours',
  },
  {
    id: '2',
    name: 'Scuba Diving Adventure',
    location: 'Bayahibe Reef',
    price: '$129',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    category: 'Scuba Diving',
  },
  {
    id: '3',
    name: 'Catalina Island Snorkeling',
    location: 'La Romana',
    price: '$75',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80',
    category: 'Snorkeling',
  },
  {
    id: '4',
    name: 'Dominicus Beach',
    location: 'Dominicus',
    price: 'Free',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    category: 'Beaches',
  },
  {
    id: '5',
    name: 'Cueva del Chicho',
    location: 'Bayahibe',
    price: '$45',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    category: 'Adventure',
  },
  {
    id: '6',
    name: 'Private Catamaran Tour',
    location: 'Bayahibe Coast',
    price: '$199',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    category: 'Boat Tours',
  },
];

export default function FeaturedGrid() {
  const [savedItems, setSavedItems] = useState<Set<string>>(new Set());

  const toggleSave = (id: string) => {
    setSavedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wider mb-4 text-lonely-black">
            Popular Experiences
          </h2>
          <p className="text-lg text-lonely-black/80 max-w-2xl mx-auto font-medium">
            Discover the best tours, activities, and hidden gems in Bayahibe & Dominicus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleSave(destination.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  aria-label="Save destination"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      savedItems.has(destination.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-lonely-black/60 hover:text-red-500'
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-semibold text-lonely-navy">
                    {destination.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-wide mb-2 text-lonely-black">
                  {destination.name}
                </h3>
                <div className="flex items-center gap-2 text-lonely-black/80 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{destination.location}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-lonely-blue">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-lonely-black">
                      {destination.rating}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-lonely-navy">
                      {destination.price}
                    </span>
                    <span className="text-xs text-lonely-black/80 ml-1">
                      {destination.price === 'Free' ? '' : 'per person'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}