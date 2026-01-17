export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="hidden md:flex items-center gap-8">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-lonely-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="h-16 w-full max-w-3xl mx-auto bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-full max-w-2xl mx-auto bg-gray-200 rounded animate-pulse" />
          <div className="h-16 w-full max-w-2xl mx-auto bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-lonely-blue/30">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-64 mx-auto bg-gray-200 rounded animate-pulse mb-12" />
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-40 bg-gray-200 rounded-full animate-pulse flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="h-10 w-80 mx-auto bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-96 mx-auto bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                  <div className="flex items-center justify-between pt-4 border-t border-lonely-blue">
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}