'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Newspaper, Leaf, Waves, Shield, Heart, Wrench, Flag, Sparkles } from 'lucide-react';
import BlogModal from './BlogModal';

const categoryConfig: Record<string, { icon: React.ElementType; gradient: string; bgClass: string }> = {
  Environment: { icon: Leaf, gradient: 'from-emerald-500 to-teal-600', bgClass: 'bg-emerald-50 border-emerald-200' },
  'Sports Tourism': { icon: Waves, gradient: 'from-cyan-500 to-blue-600', bgClass: 'bg-cyan-50 border-cyan-200' },
  Tourism: { icon: Sparkles, gradient: 'from-amber-500 to-orange-600', bgClass: 'bg-amber-50 border-amber-200' },
  Infrastructure: { icon: Wrench, gradient: 'from-slate-500 to-gray-600', bgClass: 'bg-slate-50 border-slate-200' },
  Community: { icon: Heart, gradient: 'from-rose-500 to-pink-600', bgClass: 'bg-rose-50 border-rose-200' },
  Ecology: { icon: Flag, gradient: 'from-blue-500 to-indigo-600', bgClass: 'bg-blue-50 border-blue-200' },
  Sports: { icon: Waves, gradient: 'from-cyan-500 to-blue-600', bgClass: 'bg-cyan-50 border-cyan-200' },
  Economy: { icon: Shield, gradient: 'from-amber-500 to-orange-600', bgClass: 'bg-amber-50 border-amber-200' },
};

export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  category: string;
  content: string;
}

interface BlogArticleListProps {
  articles: BlogArticle[];
}

function getExcerpt(content: string, maxLength = 140): string {
  const first = content.split('\n\n')[0];
  if (first.length <= maxLength) return first;
  return first.slice(0, maxLength).trim() + '…';
}

export default function BlogArticleList({ articles }: BlogArticleListProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <>
      <article className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-lonely-blue/10 pt-32">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lonely-navy hover:text-lonely-navy/80 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <header className="mb-20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-lonely-navy to-lonely-blue mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-lonely-black mb-6">
              Bayahibe News & Blog
            </h1>
            <p className="text-lg sm:text-xl text-lonely-black/70 leading-relaxed max-w-2xl mx-auto">
              Stories from the coast—tourism, community, and the people who make Bayahibe and Dominicus what they are.
            </p>
          </header>

          <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="sr-only">
              Latest News and Articles About Bayahibe
            </h2>
            <ul className="space-y-6" role="list">
              {articles.map((article) => {
                const config = categoryConfig[article.category] ?? categoryConfig.Community;
                const Icon = config.icon;
                const excerpt = getExcerpt(article.content);
                return (
                  <li key={article.id} id={article.slug}>
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className={`w-full text-left relative overflow-hidden rounded-2xl border-2 ${config.bgClass} shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lonely-navy focus:ring-offset-2 cursor-pointer group`}
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${config.gradient} opacity-10 rounded-bl-full`} />
                      <div className="relative p-6 sm:p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${config.gradient} shadow-sm`}>
                            <Icon className="w-4 h-4" />
                            {article.category}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-lonely-black mb-4 leading-tight group-hover:text-lonely-navy transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-lonely-black/70 leading-relaxed mb-4 line-clamp-2">
                          {excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src="/620-6200669_post-detective-pepe.png"
                                alt="Bayahibe Noticer"
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-lonely-black text-sm">Bayahibe Noticer</p>
                              <p className="text-xs text-lonely-black/60">Click to read full article</p>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-lonely-navy group-hover:underline">Read more →</span>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </article>

      <BlogModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </>
  );
}
