import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lonely-blue': '#E8F3FF',
        'lonely-navy': '#1E3A8A',
        'lonely-black': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
      },
    },
  },
  plugins: [],
};
export default config;