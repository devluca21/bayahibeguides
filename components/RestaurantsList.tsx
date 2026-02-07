'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, ExternalLink, MessageCircle, Navigation } from 'lucide-react';
import Image from 'next/image';

interface Restaurant {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  priceType: string;
  type: string;
  status?: string;
  statusOpen?: boolean;
  reviewQuote: string;
  image: string;
  mapsUrl?: string;
}

export const restaurantsData: Restaurant[] = [
  {
    id: '1',
    name: "Navegantes Resto Bar",
    location: "Bayahíbe",
    rating: 4.8,
    reviews: "138",
    priceType: "$500-1,000",
    type: "Restaurant",
    reviewQuote: "Absolutely amazing food, view of the ocean, and great service!!!",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Navegantes+Resto+Bar+Bayahibe",
  },
  {
    id: '2',
    name: "Onno's Bayahibe",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "1K",
    priceType: "$$",
    type: "Grill",
    status: "Open now",
    statusOpen: true,
    reviewQuote: "The mofongo was to die for- best one we had in the Dominican Republic!",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Onno's+Bayahibe",
  },
  {
    id: '3',
    name: "Bella 'Mbriana Bayahibe - Pizzeria Italiana",
    location: "Dominicus",
    rating: 4.6,
    reviews: "523",
    priceType: "",
    type: "Italian",
    reviewQuote: "Fantastic atmosphere, delicious food, great service!",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Bella+Mbriana+Bayahibe+Dominicus",
  },
  {
    id: '4',
    name: "BEACHSIDE by Onno's",
    location: "La Romana",
    rating: 4.7,
    reviews: "483",
    priceType: "",
    type: "Restaurant",
    status: "Closed. Opens 5 PM",
    statusOpen: false,
    reviewQuote: "Great experience, super affordable price for good quality of meal.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/BEACHSIDE+Onno's+La+Romana",
  },
  {
    id: '5',
    name: "Kukka Beach Restaurant",
    location: "Dominicus",
    rating: 4.3,
    reviews: "613",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "The seafood was good, and the Piña Colada was well made and enjoyable.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Kukka+Beach+Restaurant+Dominicus",
  },
  {
    id: '6',
    name: "IL Boccale Taberna",
    location: "Dominicus",
    rating: 4.6,
    reviews: "536",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Fantastic experience, the food is amazing, the service is exceptional.",
    image: "https://images.unsplash.com/photo-1513622473772-383d0256b1e5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/IL+Boccale+Taberna+Dominicus",
  },
  {
    id: '7',
    name: "Mare Nuestro",
    location: "Bayahíbe",
    rating: 4.2,
    reviews: "413",
    priceType: "",
    type: "Restaurant",
    reviewQuote: "Great food, friendly staff and wonderful sunset atmosphere.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Mare+Nuestro+Bayahibe",
  },
  {
    id: '8',
    name: "Perlita Morena",
    location: "Bayahíbe",
    rating: 4.7,
    reviews: "574",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Wonderful dining experience with excellent ambiance.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Perlita+Morena+Bayahibe",
  },
  {
    id: '9',
    name: "D' Manuel la Cueva - Restaurante",
    location: "Dominicus",
    rating: 4.3,
    reviews: "797",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Enjoyed eating here, the food was great and the servers are good.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/D+Manuel+la+Cueva+Restaurante+Dominicus",
  },
  {
    id: '10',
    name: "Playa BarcoBar",
    location: "Bayahíbe",
    rating: 4.6,
    reviews: "1.3K",
    priceType: "$$$",
    type: "Restaurant",
    reviewQuote: "10/10 drinks, service, food, sunset, cat, mamajuana, THE BEST!",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Playa+BarcoBar+Bayahibe",
  },
  {
    id: '11',
    name: "Don Carlo Restaurante",
    location: "Bayahíbe",
    rating: 4.8,
    reviews: "564",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Exceptional Italian cuisine with a wonderful atmosphere.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Don+Carlo+Restaurante+Bayahibe",
  },
  {
    id: '12',
    name: "Il Pomodorino - Bayahibe",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "198",
    priceType: "$$",
    type: "Italian",
    status: "Closed. Opens 6 PM",
    statusOpen: false,
    reviewQuote: "Authentic Italian dishes and cozy dining experience.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Il+Pomodorino+Bayahibe",
  },
  {
    id: '13',
    name: "Langosta Bar & Restaurant",
    location: "Dominicus",
    rating: 4.6,
    reviews: "211",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Fresh seafood and ocean views make this a must-visit.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Langosta+Bar+Restaurant+Dominicus",
  },
  {
    id: '14',
    name: "Estro Art Cafe & Bistro",
    location: "Bayahíbe",
    rating: 4.3,
    reviews: "93",
    priceType: "$$",
    type: "Bistro",
    reviewQuote: "Creative dishes and artistic ambiance - a hidden gem.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Estro+Art+Cafe+Bistro+Bayahibe",
  },
  {
    id: '15',
    name: "Tamashi Bayahibe Sushi Restaurant",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "283",
    priceType: "$$",
    type: "Japanese",
    status: "Closed. Opens 6 PM",
    statusOpen: false,
    reviewQuote: "Best sushi in the area - fresh and beautifully presented.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Tamashi+Bayahibe+Sushi+Restaurant",
  },
  {
    id: '16',
    name: "Tracadero Restaurant",
    location: "Bayahíbe",
    rating: 4.7,
    reviews: "591",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Excellent food and service with a great beachside location.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Tracadero+Restaurant+Bayahibe",
  },
  {
    id: '17',
    name: "El Dorado Restaurant",
    location: "Bayahíbe",
    rating: 4.6,
    reviews: "352",
    priceType: "$$",
    type: "Restaurant",
    reviewQuote: "Food was delicious, our server had a beautiful smile, price was spot on.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/El+Dorado+Restaurant+Bayahibe",
  },
  {
    id: '18',
    name: "Chinola",
    location: "Bayahíbe",
    rating: 4.7,
    reviews: "25",
    priceType: "",
    type: "Restaurant",
    reviewQuote: "The service and atmosphere were great and included live entertainment.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Chinola+Restaurant+Bayahibe",
  },
  {
    id: '19',
    name: "Las Iguanas Bayahibe - Rooftop Restaurant",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "22",
    priceType: "$500-1,000",
    type: "Restaurant",
    reviewQuote: "Tasty freshly made food, excellent service, and a great view!",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Las+Iguanas+Bayahibe+Rooftop+Restaurant",
  },
  {
    id: '20',
    name: "La Casita de Mary",
    location: "Bayahíbe",
    rating: 4.6,
    reviews: "74",
    priceType: "$500-1,000",
    type: "Family-friendly",
    reviewQuote: "It's a nice and comfy place, good prices and excellent service.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/La+Casita+de+Mary+Bayahibe",
  },
  {
    id: '21',
    name: "Grill Lobster Dinner by Carlos",
    location: "Dominicus",
    rating: 4.8,
    reviews: "180",
    priceType: "$1-500",
    type: "Barbecue",
    reviewQuote: "The fish, lobster, shrimp and piña coladas were so fresh and savory.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Grill+Lobster+Dinner+by+Carlos+Dominicus",
  },
  {
    id: '22',
    name: "Casa Turca Restaurante",
    location: "Sector El Limon, La Romana",
    rating: 4.6,
    reviews: "107",
    priceType: "",
    type: "Restaurant",
    reviewQuote: "Moderate prices, great service and great food.",
    image: "https://images.unsplash.com/photo-1513622473772-383d0256b1e5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Casa+Turca+Restaurante+La+Romana",
  },
  {
    id: '23',
    name: "Mama Mia",
    location: "Bayahíbe",
    rating: 4.6,
    reviews: "286",
    priceType: "$500-1,000",
    type: "Restaurant",
    status: "Closed. Opens 7 PM",
    statusOpen: false,
    reviewQuote: "Very good food, fair prices and the owner is very kind.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Mama+Mia+Bayahibe",
  },
  {
    id: '24',
    name: "Lo Sfizio",
    location: "Bayahíbe",
    rating: 4.8,
    reviews: "58",
    priceType: "$500-1,000",
    type: "Italian",
    status: "Closed. Opens 7 PM",
    statusOpen: false,
    reviewQuote: "The food is excellent and the atmosphere is friendly.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Lo+Sfizio+Bayahibe",
  },
  {
    id: '25',
    name: "La Bahía Beach",
    location: "Bayahíbe",
    rating: 4.3,
    reviews: "126",
    priceType: "",
    type: "Restaurant",
    reviewQuote: "Delicious, fresh, excellent service, beautiful view.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/La+Bahía+Beach+Bayahibe",
  },
  {
    id: '26',
    name: "Restaurante y comedor yadiel",
    location: "Bayahíbe",
    rating: 4.8,
    reviews: "152",
    priceType: "$1-500",
    type: "Restaurant",
    reviewQuote: "Here I had a whole meal for $2 and it was gooooood!",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Restaurante+y+comedor+yadiel+Bayahibe",
  },
  {
    id: '27',
    name: "NOOR Mediterranen Restaurant",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "52",
    priceType: "",
    type: "Restaurant",
    status: "Closed. Opens 6 PM",
    statusOpen: false,
    reviewQuote: "Great food and service.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/NOOR+Mediterranen+Restaurant+Bayahibe",
  },
  {
    id: '28',
    name: "KEEX",
    location: "Bayahíbe",
    rating: 4.9,
    reviews: "292",
    priceType: "$1-500",
    type: "Fast Food",
    status: "Closed. Opens 5 PM",
    statusOpen: false,
    reviewQuote: "Great food. Very nice friendly owners. Excellent service. Food was delicious.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/KEEX+Bayahibe",
  },
  {
    id: '29',
    name: "Restaurante Comedor Johana",
    location: "Bayahíbe",
    rating: 4.3,
    reviews: "102",
    priceType: "$1-500",
    type: "Restaurant",
    reviewQuote: "The fish soup and mofongo were both really tasty.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Restaurante+Comedor+Johana+Bayahibe",
  },
  {
    id: '30',
    name: "EL Chiringuito Pizzeria da Michele",
    location: "San Rafael de Yuma",
    rating: 4.6,
    reviews: "172",
    priceType: "$500-1,000",
    type: "Pizza",
    status: "Opens soon. 4:30 PM",
    statusOpen: true,
    reviewQuote: "All the ingredients are top quality, and the service is excellent.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/EL+Chiringuito+Pizzeria+da+Michele+San+Rafael+de+Yuma",
  },
  {
    id: '31',
    name: "Blue Cafe",
    location: "Dominicus",
    rating: 4.5,
    reviews: "372",
    priceType: "$500-1,000",
    type: "Italian",
    reviewQuote: "Very friendly staff, good prices and excellent food and drink!",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Blue+Cafe+Dominicus",
  },
  {
    id: '32',
    name: "Shibuya Ichiban Casa de Campo",
    location: "La Romana",
    rating: 4.3,
    reviews: "73",
    priceType: "",
    type: "Asian Fusion",
    reviewQuote: "I would totally return to enjoy their amazing pork belly.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Shibuya+Ichiban+Casa+de+Campo",
  },
  {
    id: '33',
    name: "MiaTerra Pizzeria by Alkquimia",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "72",
    priceType: "",
    type: "Italian",
    status: "Closed. Opens 5 PM",
    statusOpen: false,
    reviewQuote: "Finally we found authentic Italian pizza in Bayahibe, delicious and tasty!",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/MiaTerra+Pizzeria+Alkquimia+Bayahibe",
  },
  {
    id: '34',
    name: "The Lost Bar & Restaurant",
    location: "Bayahíbe",
    rating: 4.7,
    reviews: "185",
    priceType: "$1-500",
    type: "Bar",
    status: "Closed. Opens 7 PM",
    statusOpen: false,
    reviewQuote: "Love the music and ambiance and always great food and service.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/The+Lost+Bar+Restaurant+Bayahibe",
  },
  {
    id: '35',
    name: "Perlage Cafe",
    location: "Parada Guaguas Bayahibe-Benerito-Higuey",
    rating: 4.6,
    reviews: "148",
    priceType: "$500-1,000",
    type: "Restaurant",
    reviewQuote: "Service was great, food delicious and great prices.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Perlage+Cafe+Bayahibe",
  },
  {
    id: '36',
    name: "Gastro Pizza Bayahibe",
    location: "Bayahíbe",
    rating: 4.9,
    reviews: "103",
    priceType: "$1-500",
    type: "Italian",
    status: "Closed. Opens 7 PM",
    statusOpen: false,
    reviewQuote: "Good prices and amazing food.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Gastro+Pizza+Bayahibe",
  },
  {
    id: '37',
    name: "MOUSTACHE",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "22",
    priceType: "",
    type: "French",
    status: "Closed. Opens 6 AM Sun",
    statusOpen: false,
    reviewQuote: "Great presentation and very tasty food.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/MOUSTACHE+Bayahibe",
  },
  {
    id: '38',
    name: "Caoba",
    location: "Bayahíbe",
    rating: 4.1,
    reviews: "17",
    priceType: "",
    type: "Family-friendly",
    reviewQuote: "They are open for breakfast and lunch.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Caoba+Bayahibe",
  },
  {
    id: '39',
    name: "The Grill",
    location: "Bayahíbe",
    rating: 4.0,
    reviews: "45",
    priceType: "",
    type: "Barbecue",
    reviewQuote: "We had oatmeal, muesli, the breakfast burrito, and the Dominican breakfast.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/The+Grill+Bayahibe",
  },
  {
    id: '40',
    name: "Restaurante Atlantis Viva Wyndham",
    location: "Dominicus",
    rating: 4.5,
    reviews: "578",
    priceType: "$1-500",
    type: "Restaurant",
    status: "Closed. Opens 6:15 PM",
    statusOpen: false,
    reviewQuote: "Great food and service, but it was unbearably hot.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Restaurante+Atlantis+Viva+Wyndham+Dominicus",
  },
  {
    id: '41',
    name: "Lago Restaurant",
    location: "Casitas",
    rating: 4.7,
    reviews: "86",
    priceType: "",
    type: "Buffet",
    status: "Closed. Opens 6:30 AM Sun",
    statusOpen: false,
    reviewQuote: "Love this perfect place, the service, the views and the FOOD is exceptional.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Lago+Restaurant+Casitas",
  },
  {
    id: '42',
    name: "La Casita Restaurante",
    location: "La Romana",
    rating: 4.4,
    reviews: "472",
    priceType: "",
    type: "Restaurant",
    status: "Closed. Opens 6 PM",
    statusOpen: false,
    reviewQuote: "Delicious paella, fresh seafood, good service, and beautiful night views.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/La+Casita+Restaurante+La+Romana",
  },
  {
    id: '43',
    name: "FRONTONI PIZZA",
    location: "Bayahíbe",
    rating: 4.5,
    reviews: "315",
    priceType: "$500-1,000",
    type: "Pizza",
    reviewQuote: "Best pizza in Bayahibe, Italian quality!",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/FRONTONI+PIZZA+Bayahibe",
  },
  {
    id: '44',
    name: "Iberostar Selection Hacienda Dominicus",
    location: "Higuey",
    rating: 4.8,
    reviews: "19K",
    priceType: "",
    type: "Resort hotel",
    reviewQuote: "The staff are amazing, the food is delicious, very clean.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Iberostar+Selection+Hacienda+Dominicus",
  },
  {
    id: '45',
    name: "Onno's Taqueria / Pizzería",
    location: "Francisco Richiez 57",
    rating: 4.6,
    reviews: "228",
    priceType: "",
    type: "Restaurant",
    reviewQuote: "The portions are perfect, and the presentation is colorful and appetizing.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Onno's+Taqueria+Pizzeria+Francisco+Richiez",
  },
  {
    id: '46',
    name: "El Patio Tropical Food",
    location: "Bayahíbe",
    rating: 4.6,
    reviews: "17",
    priceType: "$500-1,000",
    type: "Barbecue",
    reviewQuote: "Excellent food and good prices, I recommend!",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/El+Patio+Tropical+Food+Bayahibe",
  },
  {
    id: '47',
    name: "EL PARAISO DE MARITZA",
    location: "Bayahíbe",
    rating: 4.6,
    reviews: "32",
    priceType: "$1,000-1,500",
    type: "Restaurant",
    reviewQuote: "The fish were fresh and delicious, along with homemade plantanos/maduros.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/EL+PARAISO+DE+MARITZA+Bayahibe",
  },
  {
    id: '48',
    name: "Tracadero Beach Club bayahibe",
    location: "Dominicus",
    rating: 4.6,
    reviews: "880",
    priceType: "",
    type: "Hotel",
    reviewQuote: "Highly recommend the Pineapple fried rice!",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Tracadero+Beach+Club+bayahibe+Dominicus",
  },
  {
    id: '49',
    name: "PATACON",
    location: "Bayahíbe",
    rating: 5.0,
    reviews: "61",
    priceType: "$500-1,000",
    type: "Hamburger",
    reviewQuote: "Amazing local and family owned spot, highly recommended!",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/PATACON+Bayahibe",
  },
  {
    id: '50',
    name: "Shish Kabab",
    location: "C. Francisco Castillo Marquez 32",
    rating: 4.6,
    reviews: "2.5K",
    priceType: "$500-1,500",
    type: "Mediterranean",
    reviewQuote: "They have great food, good service, good atmosphere, and free wifi, 8/10.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Shish+Kabab+La+Romana",
  },
  {
    id: '51',
    name: "Dreams La Romana Resort & Spa",
    location: "Playa Bayahibe",
    rating: 4.8,
    reviews: "5.3K",
    priceType: "",
    type: "Resort hotel",
    reviewQuote: "Beautiful place with great service and great food. Excelente.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Dreams+La+Romana+Resort+Spa",
  },
  {
    id: '52',
    name: "Café Marietta",
    location: "La Romana",
    rating: 4.5,
    reviews: "349",
    priceType: "",
    type: "Italian",
    reviewQuote: "Excellent food, great variety, nice ambient and perfect prices.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/Café+Marietta+La+Romana",
  },
];

export default function RestaurantsList() {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {restaurantsData.map((restaurant, index) => {
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${restaurant.name}, ${restaurant.location}`)}`;
            return (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full relative"
            >
              <motion.div
                className="absolute inset-0 bg-lonely-blue opacity-0 group-hover:opacity-10 rounded-2xl z-10 pointer-events-none transition-opacity duration-300"
              />

              <div className="relative h-64 w-full flex-shrink-0 overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-lonely-black">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 min-h-0">
                <h3 className="text-xl font-bold tracking-wide mb-2 text-lonely-black">
                  {restaurant.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-lonely-black/60 mb-2">
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.round(restaurant.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </span>
                  <span>({restaurant.reviews})</span>
                  {restaurant.priceType && (
                    <span>· {restaurant.priceType}</span>
                  )}
                  <span>· {restaurant.type}</span>
                </div>
                <div className="flex items-center gap-2 text-lonely-black/60 mb-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{restaurant.location}</span>
                </div>
                <div className="min-h-[1.5rem] mb-1">
                  {restaurant.status && (
                    <p className={`text-sm font-medium ${restaurant.statusOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {restaurant.status}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 mb-4 min-h-[2.5rem] flex-1">
                  {restaurant.reviewQuote && (
                    <>
                      <MessageCircle className="w-4 h-4 text-lonely-navy flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-lonely-black/70 italic line-clamp-2">
                        &ldquo;{restaurant.reviewQuote}&rdquo;
                      </p>
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-2 flex-shrink-0 mt-auto">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-lonely-navy hover:bg-lonely-navy/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                  <a
                    href={restaurant.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-lonely-navy text-lonely-navy hover:bg-lonely-blue/50 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View on Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
