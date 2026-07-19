export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      <div className="skeleton h-10 w-52 bg-gray-300 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col min-h-[230px]"
          >
            <div className="relative">
              <div className="skeleton h-44 w-full bg-gray-300"></div>

              <div className="absolute top-3 right-3 skeleton h-7 w-20 rounded-full bg-gray-200"></div>
            </div>

            {/*// Content// */}
            <div className="flex flex-col flex-1 p-5">
              <div className="space-y-2">
                <div className="skeleton h-6 w-4/5 bg-gray-300"></div>
                <div className="skeleton h-6 w-2/3 bg-gray-300"></div>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <div className="skeleton h-4 w-16 bg-gray-300"></div>

                <div className="skeleton h-4 w-20 bg-gray-300"></div>
              </div>

              <div className="mt-auto pt-5 flex gap-3">
                <div className="skeleton h-11 flex-1 rounded-lg bg-gray-300"></div>

                <div className="skeleton h-11 flex-1 rounded-lg bg-gray-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
