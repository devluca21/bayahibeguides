import { Suspense } from 'react';
import RealEstateList from '@/components/RealEstateList';
import RealEstateHero from '@/components/RealEstateHero';

export default function RealEstatePage() {
  return (
    <>
      <RealEstateHero />
      <Suspense fallback={<RealEstateSkeleton />}>
        <RealEstateList />
      </Suspense>
    </>
  );
}

function RealEstateSkeleton() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
