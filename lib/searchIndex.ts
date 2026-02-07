import { restaurantsData } from '@/components/RestaurantsList';

// Destinations from FeaturedGrid - searchable content (includes beaches)
const destinations = [
  { id: 'd1', title: 'Saona Island Day Trip', keywords: 'saona island day trip bayahibe island tours beaches', link: '/#destinations', type: 'Destination' },
  { id: 'd2', title: 'Scuba Diving Adventure', keywords: 'scuba diving bayahibe reef', link: '/#destinations', type: 'Destination' },
  { id: 'd3', title: 'Catalina Island Snorkeling', keywords: 'catalina island snorkeling la romana beaches', link: '/#destinations', type: 'Destination' },
  { id: 'd4', title: 'Dominicus Beach', keywords: 'dominicus beach beaches playa', link: '/#destinations', type: 'Destination' },
  { id: 'd5', title: 'Cueva del Chicho', keywords: 'cueva del chicho bayahibe adventure', link: '/#destinations', type: 'Destination' },
  { id: 'd6', title: 'Private Catamaran Tour', keywords: 'catamaran boat tour bayahibe coast', link: '/#destinations', type: 'Destination' },
];

// Categories - link to home page or specific pages
const categories = [
  { id: 'c1', title: 'Rentals', keywords: 'rentals vacation rental airbnb', link: '/rentals', type: 'Category' },
  { id: 'c2', title: 'Real Estate Agencies', keywords: 'real estate agencies property', link: '/real-estate', type: 'Category' },
  { id: 'c3', title: 'Restaurants', keywords: 'restaurants dining food eat', link: '/restaurants', type: 'Category' },
  { id: 'c4', title: 'Beaches', keywords: 'beaches beach', link: '/#categories', type: 'Category' },
  { id: 'c5', title: 'Excursions', keywords: 'excursions tours', link: '/#categories', type: 'Category' },
  { id: 'c6', title: 'VIP Transport Services', keywords: 'vip transport transportation', link: '/#categories', type: 'Category' },
  { id: 'c7', title: 'Local Cuisine', keywords: 'local cuisine food', link: '/#categories', type: 'Category' },
  { id: 'c8', title: 'Bayahibe News', keywords: 'bayahibe news', link: '/blog', type: 'Category' },
];

export interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  link: string;
  type: string;
}

function buildSearchIndex(): SearchResult[] {
  const restaurantResults: SearchResult[] = restaurantsData.map((r) => ({
    id: `r${r.id}`,
    title: r.name,
    subtitle: `${r.type} · ${r.location}`,
    link: '/restaurants',
    type: 'Restaurant',
  }));

  return [
    ...restaurantResults,
    ...destinations.map((d) => ({ id: d.id, title: d.title, link: d.link, type: d.type })),
    ...categories.map((c) => ({ id: c.id, title: c.title, link: c.link, type: c.type })),
  ];
}

const searchIndex = buildSearchIndex();

function getKeywordsForItem(item: SearchResult): string {
  if (item.type === 'Restaurant') {
    const rId = item.id.replace('r', '');
    const r = restaurantsData.find((x) => x.id === rId);
    if (r) return `${r.name} ${r.location} ${r.type} ${r.reviewQuote}`.toLowerCase();
  }
  if (item.type === 'Destination') {
    const d = destinations.find((x) => x.id === item.id);
    return d ? `${d.title} ${d.keywords}`.toLowerCase() : item.title.toLowerCase();
  }
  if (item.type === 'Category') {
    const c = categories.find((x) => x.id === item.id);
    return c ? `${c.title} ${c.keywords}`.toLowerCase() : item.title.toLowerCase();
  }
  return item.title.toLowerCase();
}

export function searchByKeyword(query: string): SearchResult[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const words = trimmed.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  return searchIndex.filter((item) => {
    const keywords = getKeywordsForItem(item);
    return words.some((word) => keywords.includes(word));
  });
}
