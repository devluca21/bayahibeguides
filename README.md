# Bayahibe Guides

A high-fidelity travel guide platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, inspired by Lonely Planet's aesthetic.

## Features

- **Lonely Planet-inspired Design**: Clean white background with light blue accents (#E8F3FF)
- **Sticky Blurred Header**: Glass-morphism header that shrinks on scroll
- **Hero Section**: Centered search with beautiful background imagery
- **Featured Destinations Grid**: Responsive cards with save functionality
- **Category Navigation**: Horizontal scroll pill-based categories
- **Smooth Animations**: Framer Motion fade-in-up effects throughout
- **Loading States**: Skeleton loaders for instant feel
- **Fully Responsive**: Mobile-first approach with Tailwind CSS
- **Vacation Rentals**: Integration with Airbnb listings for Bayahibe properties

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (via Next.js)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with Header and Footer
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles with Tailwind
│   ├── loading.tsx     # Loading UI with skeletons
│   ├── rentals/        # Rentals page
│   └── api/airbnb/     # Airbnb API route
├── components/
│   ├── Header.tsx      # Sticky blurred navigation
│   ├── Hero.tsx        # Hero section with search
│   ├── Categories.tsx  # Category cards with hover effects
│   ├── FeaturedGrid.tsx # Destination cards grid
│   ├── RentalsList.tsx # Vacation rental listings
│   ├── RentalsHero.tsx # Rentals page header
│   └── Footer.tsx      # Minimalist footer
└── package.json
```

## Design System

### Colors
- **Primary White**: #FFFFFF
- **Light Blue Accent**: #E8F3FF
- **Navy Blue**: #1E3A8A (buttons, headings)
- **Deep Black**: #0F172A (typography)

### Typography
- **Font**: Inter (via Next.js)
- **Headings**: Large, bold with generous letter spacing
- **Body**: Clean sans-serif with comfortable line height

### Spacing
- Aggressive whitespace throughout
- Rounded corners: `rounded-2xl` for cards
- Subtle shadows: `shadow-sm` for depth

## License

MIT
