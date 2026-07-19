export default function Loading() {
  return (
    <main className="animate-pulse">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto mt-6 rounded-3xl bg-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px] px-8 lg:px-16">
          {/* Left */}
          <div>
            <div className="skeleton h-6 w-48 bg-gray-300 mb-6"></div>

            <div className="space-y-4 mb-6">
              <div className="skeleton h-14 w-full max-w-md bg-gray-300"></div>
              <div className="skeleton h-14 w-80 bg-gray-300"></div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="skeleton h-5 w-96 bg-gray-300"></div>
              <div className="skeleton h-5 w-72 bg-gray-300"></div>
            </div>

            <div className="skeleton h-14 w-56 rounded-full bg-gray-300"></div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block h-full">
            {/* Main Image */}

            <div className="skeleton absolute top-24 right-0 w-36 h-40 rounded-2xl bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex items-center gap-4 p-6">
            <div className="skeleton w-10 h-10 rounded-full bg-gray-300"></div>

            <div>
              <div className="skeleton h-6 w-16 mb-2 bg-gray-300"></div>
              <div className="skeleton h-4 w-20 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Top Courses */}
      <section className="max-w-7xl mx-auto rounded-2xl bg-gray-100 shadow-lg p-8 my-8">
        <div className="skeleton h-7 w-40 bg-gray-300 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="skeleton h-52 w-full bg-gray-300"></div>

              <div className="p-5">
                <div className="skeleton h-6 w-3/4 bg-gray-300 mb-4"></div>

                <div className="flex justify-between mb-6">
                  <div className="skeleton h-4 w-20 bg-gray-300"></div>
                  <div className="skeleton h-4 w-16 bg-gray-300"></div>
                </div>

                <div className="flex gap-4">
                  <div className="skeleton h-10 flex-1 rounded-lg bg-gray-300"></div>

                  <div className="skeleton h-10 flex-1 rounded-lg bg-gray-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Join Banner */}
      <section className="my-18 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gray-100 px-8 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <div className="skeleton h-9 w-3/4 bg-gray-300 mb-4"></div>

            <div className="skeleton h-5 w-2/3 bg-gray-300 mb-2"></div>

            <div className="skeleton h-5 w-1/2 bg-gray-300"></div>
          </div>

          <div className="flex items-center gap-5 mt-6 md:mt-0">
            <div className="skeleton h-12 w-36 rounded-xl bg-gray-300"></div>

            <div className="skeleton w-16 h-16 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="max-w-7xl mx-auto my-15">
        <div className="skeleton h-7 w-44 bg-gray-300 mb-8"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-2 text-center">
              {/* Avatar */}
              <div className="skeleton w-35 h-35 rounded-full mx-auto bg-gray-300"></div>

              {/* Name */}
              <div className="skeleton h-6 w-36 mx-auto mt-5 bg-gray-300"></div>

              {/* Role */}
              <div className="skeleton h-4 w-28 mx-auto mt-3 bg-gray-300"></div>

              {/* Rating */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="skeleton h-4 w-12 bg-gray-300"></div>

                <div className="skeleton h-4 w-16 bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
