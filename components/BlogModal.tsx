'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import { Leaf, Waves, Shield, Heart, Wrench, Flag, Sparkles } from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ElementType; gradient: string }> = {
  Environment: { icon: Leaf, gradient: 'from-emerald-500 to-teal-600' },
  'Sports Tourism': { icon: Waves, gradient: 'from-cyan-500 to-blue-600' },
  Tourism: { icon: Sparkles, gradient: 'from-amber-500 to-orange-600' },
  Infrastructure: { icon: Wrench, gradient: 'from-slate-500 to-gray-600' },
  Community: { icon: Heart, gradient: 'from-rose-500 to-pink-600' },
  Ecology: { icon: Flag, gradient: 'from-blue-500 to-indigo-600' },
  Sports: { icon: Waves, gradient: 'from-cyan-500 to-blue-600' },
  Economy: { icon: Shield, gradient: 'from-amber-500 to-orange-600' },
};

interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  category: string;
  content: string;
}

interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

const NEWS_SOURCES = [
  { name: 'Dominican Today', url: 'https://dominicantoday.com/?s=bayahibe' },
  { name: 'Acento — Noticias de Bayahibe', url: 'https://acento.com.do/tags/?tag=bayahibe' },
  { name: 'DR1.com', url: 'https://dr1.com/news.php', note: 'English-language DR news since 1997' },
  { name: 'Listín Diario', url: 'https://listindiario.com', note: "Dominican Republic's oldest newspaper" },
  { name: 'Diario Libre', url: 'https://diariolibre.com', note: 'Leading Dominican daily' },
];

export default function BlogModal({ article, onClose }: BlogModalProps) {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!article) return null;

  const config = categoryConfig[article.category] ?? categoryConfig.Community;
  const Icon = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex-1 overflow-y-auto">
            <div className="sticky top-0 z-10 flex justify-end p-4 bg-white/95 backdrop-blur-sm border-b border-lonely-blue/20">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-lonely-blue/30 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-lonely-black" />
              </button>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${config.gradient} shadow-sm mb-6`}>
                <Icon className="w-4 h-4" />
                {article.category}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lonely-black mb-6 leading-tight">
                {article.title}
              </h2>
              <div className="prose prose-lg text-lonely-black/80 leading-relaxed space-y-6 mb-8">
                {article.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-base sm:text-lg">{paragraph}</p>
                ))}
              </div>
              <div className="flex items-center gap-4 py-6 border-t border-b border-lonely-black/10 mb-8">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/620-6200669_post-detective-pepe.png"
                    alt="Bayahibe Noticer"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lonely-black text-lg">Bayahibe Noticer</p>
                  <p className="text-sm text-lonely-black/60">Independent journalist</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-lonely-black">More Dominican news sources:</p>
                <div className="flex flex-wrap gap-3">
                  {NEWS_SOURCES.map((source) => (
                    <a
                      key={source.name}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lonely-blue/30 hover:bg-lonely-blue/50 text-lonely-navy font-medium transition-colors"
                      title={source.note}
                    >
                      {source.name}
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
