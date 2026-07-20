export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      {/* Course Image */}
      <div className="w-full h-80 rounded-xl bg-base-300"></div>

      {/* Course Info */}
      <div className="mt-6 space-y-4">
        <div className="h-10 w-2/3 bg-base-300 rounded"></div>

        <div className="space-y-2">
          <div className="h-4 w-full bg-base-300 rounded"></div>
          <div className="h-4 w-11/12 bg-base-300 rounded"></div>
          <div className="h-4 w-9/12 bg-base-300 rounded"></div>
        </div>

        <div className="flex gap-3">
          <div className="h-8 w-24 rounded-full bg-base-300"></div>
          <div className="h-8 w-20 rounded-full bg-base-300"></div>
        </div>

        <div className="h-5 w-56 bg-base-300 rounded"></div>
      </div>

      {/* Lectures */}
      <div className="mt-10">
        <div className="h-8 w-56 bg-base-300 rounded mb-6"></div>

        <div className="space-y-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex justify-between items-center"
            >
              <div className="space-y-2 flex-1">
                <div className="h-5 w-2/3 bg-base-300 rounded"></div>
                <div className="h-4 w-1/3 bg-base-300 rounded"></div>
              </div>

              <div className="h-10 w-32 bg-base-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
