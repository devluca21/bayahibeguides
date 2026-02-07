'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, UtensilsCrossed, MapPin, Layers } from 'lucide-react';
import Link from 'next/link';
import { searchByKeyword, type SearchResult } from '@/lib/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export default function SearchModal({ isOpen, onClose, initialQuery = '' }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setIsSearching(true);
    const searchResults = searchByKeyword(query);
    setResults(searchResults.slice(0, 20));
    setIsSearching(false);
  }, [query]);

  useEffect(() => {
    const debounce = setTimeout(performSearch, 200);
    return () => clearTimeout(debounce);
  }, [query, performSearch]);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setResults(initialQuery ? searchByKeyword(initialQuery).slice(0, 20) : []);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 pb-8"
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-4 py-4 border-b border-lonely-blue/30">
            <Search className="w-5 h-5 text-lonely-navy flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants, beaches, activities, or tours..."
              className="flex-1 outline-none text-lonely-black placeholder:text-lonely-black/50 text-lg py-2"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-lonely-blue/50 rounded-full transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-lonely-black" />
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() ? (
              isSearching ? (
                <div className="py-12 text-center text-lonely-black/60">Searching...</div>
              ) : results.length > 0 ? (
                <ul className="py-2">
                  {results.map((result) => (
                    <li key={result.id}>
                      <Link
                        href={result.link}
                        onClick={onClose}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-lonely-blue/30 transition-colors"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lonely-blue/50 flex items-center justify-center">
                          {result.type === 'Restaurant' ? (
                            <UtensilsCrossed className="w-5 h-5 text-lonely-navy" />
                          ) : result.type === 'Destination' ? (
                            <MapPin className="w-5 h-5 text-lonely-navy" />
                          ) : (
                            <Layers className="w-5 h-5 text-lonely-navy" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-lonely-black truncate">{result.title}</p>
                          {result.subtitle && (
                            <p className="text-sm text-lonely-black/60 truncate">{result.subtitle}</p>
                          )}
                          <p className="text-xs text-lonely-navy">{result.type}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-12 text-center text-lonely-black/60">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )
            ) : (
              <div className="py-12 text-center text-lonely-black/60">
                Type to search restaurants, beaches, activities, and more
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
