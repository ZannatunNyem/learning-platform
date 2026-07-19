export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="skeleton h-10 w-64 bg-gray-300"></div>

        <div className="skeleton h-11 w-36 rounded-lg bg-gray-300"></div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative">
              <div className="skeleton h-44 w-full bg-gray-300"></div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 skeleton h-7 w-20 rounded-full bg-gray-200"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              {/* Title */}
              <div className="space-y-2">
                <div className="skeleton h-6 w-4/5 bg-gray-300"></div>
                <div className="skeleton h-6 w-2/3 bg-gray-300"></div>
              </div>

              {/* Level & Lessons */}
              <div className="mt-3 flex justify-between items-center">
                <div className="skeleton h-4 w-16 bg-gray-300"></div>

                <div className="skeleton h-4 w-20 bg-gray-300"></div>
              </div>

              {/* Delete Button */}
              <div className="mt-auto pt-5">
                <div className="skeleton h-11 w-full rounded-lg bg-gray-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
