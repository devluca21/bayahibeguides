import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedGrid from '@/components/FeaturedGrid';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedGrid />
      <AboutSection />
    </>
  );
}