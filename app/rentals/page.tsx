import { Suspense } from 'react';
import RentalsList from '@/components/RentalsList';
import RentalsHero from '@/components/RentalsHero';

export default function RentalsPage() {
  return (
    <>
      <RentalsHero />
      <Suspense fallback={<RentalsSkeleton />}>
        <RentalsList />
      </Suspense>
    </>
  );
}

function RentalsSkeleton() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}