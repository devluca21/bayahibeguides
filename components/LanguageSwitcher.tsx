'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const btnClass = (l: 'en' | 'es' | 'fr') =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
      locale === l ? 'bg-lonely-navy text-white' : 'text-lonely-navy hover:bg-lonely-blue/30'
    }`;

  return (
    <div className="flex items-center gap-1 rounded-full bg-lonely-blue/20 p-1">
      <button onClick={() => setLocale('en')} className={btnClass('en')} aria-label="English">
        EN
      </button>
      <button onClick={() => setLocale('es')} className={btnClass('es')} aria-label="Español">
        ES
      </button>
      <button onClick={() => setLocale('fr')} className={btnClass('fr')} aria-label="Français">
        FR
      </button>
    </div>
  );
}
