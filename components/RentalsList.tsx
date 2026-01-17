'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Bed, Bath, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Rental {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  airbnbUrl?: string;
}

// This will be replaced with actual Airbnb API integration
// For now, using placeholder data structure
export default function RentalsList() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Airbnb listing IDs from the URLs provided
    const airbnbListingIds = [
      '1177612286175983879',
      '1442910745577904880',
      '1286823411165893169',
    ];

    // Function to fetch Airbnb listing data
    // TODO: Replace this with actual Airbnb API integration
    // Options:
    // 1. Airbnb Partner API (if you have partner access)
    // 2. Web scraping (check Airbnb Terms of Service)
    // 3. Third-party service that provides Airbnb data
    // 4. Manual data entry/management
    const fetchAirbnbListings = async () => {
      try {
        // Option 1: Fetch from your API route (which should fetch from Airbnb)
        // const response = await fetch(`/api/airbnb?ids=${airbnbListingIds.join(',')}`);
        // const data = await response.json();
        
        // Option 2: For now, using placeholder data structure
        // IMPORTANT: Replace this with actual Airbnb data fetching
        // This placeholder data will be replaced with real data that includes:
        // - Real images from Airbnb listings (fetch from Airbnb)
        // - Actual pricing from Airbnb (dynamic pricing)
        // - Real ratings and reviews from Airbnb
        // - Actual property details (beds, baths, guests, etc.)
        
        // Placeholder data matching the Airbnb listing structure
        // TODO: Fetch actual data from Airbnb using one of these methods:
        // 1. Airbnb Partner API
        // 2. Web scraping (with permission/ToS compliance)
        // 3. Third-party Airbnb data service
        const placeholderListings: Rental[] = [
          {
            id: '1177612286175983879',
            title: 'Vacation Rental in Bayahibe', // Replace with real Airbnb title
            location: 'Bayahibe, Dominican Republic',
            price: 120, // Replace with real Airbnb price
            rating: 4.9, // Replace with real Airbnb rating
            reviews: 45, // Replace with real review count
            guests: 6, // Replace with real guest capacity
            bedrooms: 2,
            bathrooms: 2,
            image: '/listing-1.avif', // Main photo for first listing
            airbnbUrl: 'https://www.airbnb.com/rooms/1177612286175983879',
          },
          {
            id: '1442910745577904880',
            title: 'Beachside Property in Bayahibe', // Replace with real Airbnb title
            location: 'Bayahibe, Dominican Republic',
            price: 95, // Replace with real Airbnb price
            rating: 4.8, // Replace with real Airbnb rating
            reviews: 32, // Replace with real review count
            guests: 4, // Replace with real guest capacity
            bedrooms: 2,
            bathrooms: 2,
            image: '/listing-2.avif', // Main photo for second listing
            airbnbUrl: 'https://www.airbnb.com/rooms/1442910745577904880',
          },
          {
            id: '1286823411165893169',
            title: 'Luxury Beach Accommodation', // Replace with real Airbnb title
            location: 'Bayahibe, Dominican Republic',
            price: 180, // Replace with real Airbnb price
            rating: 5.0, // Replace with real Airbnb rating
            reviews: 28, // Replace with real review count
            guests: 8, // Replace with real guest capacity
            bedrooms: 2,
            bathrooms: 2,
            image: '/listing-3.avif', // Main photo for third listing
            airbnbUrl: 'https://www.airbnb.com/rooms/1286823411165893169',
          },
        ];

        // TODO: Replace with actual API response
        // When you integrate Airbnb API, replace this with:
        // const listings = await fetchAirbnbListings(airbnbListingIds);
        // setRentals(listings);
        setRentals(placeholderListings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Airbnb listings:', error);
        setLoading(false);
      }
    };

    fetchAirbnbListings();
  }, []);

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((rental, index) => (
            <motion.a
              key={rental.id}
              href={rental.airbnbUrl || `https://www.airbnb.com/rooms/${rental.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer block relative"
            >
              {/* Hover overlay effect */}
              <motion.div
                className="absolute inset-0 bg-lonely-blue opacity-0 group-hover:opacity-10 rounded-2xl z-10 pointer-events-none transition-opacity duration-300"
              />

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={rental.image}
                  alt={rental.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-lonely-black">
                      {rental.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold tracking-wide mb-2 text-lonely-black">
                  {rental.title}
                </h3>
                <div className="flex items-center gap-2 text-lonely-black/60 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{rental.location}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-lonely-black/60 mb-4 pb-4 border-b border-lonely-blue">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{rental.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{rental.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{rental.bathrooms}</span>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-2 mb-4">
                  <span className="text-sm text-lonely-black/60">
                    {rental.reviews} reviews
                  </span>
                </div>

                {/* Book Now Button */}
                <div className="w-full bg-lonely-navy hover:bg-lonely-navy/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group/btn">
                  <span>Book Now</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Placeholder message for Airbnb integration */}
        {rentals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lonely-black/60 mb-4">
              Airbnb listings will appear here once integrated.
            </p>
            <p className="text-sm text-lonely-black/40">
              Connect your Airbnb API to display real-time listings.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}