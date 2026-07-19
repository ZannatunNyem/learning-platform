export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="rounded-2xl bg-gray-100 p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4">
              <div className="skeleton w-14 h-14 rounded-full bg-gray-300"></div>

              <div>
                <div className="skeleton h-8 w-60 bg-gray-300 mb-3"></div>

                <div className="skeleton h-6 w-28 rounded-full bg-gray-300"></div>
              </div>
            </div>

            <div className="skeleton h-5 w-52 bg-gray-300 mt-6"></div>
          </div>

          <div className="skeleton h-12 w-40 rounded-xl bg-gray-300"></div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-15 mb-8 ml-10">
        <div>
          <div className="skeleton h-8 w-56 bg-gray-300 mb-3"></div>

          <div className="skeleton h-5 w-80 bg-gray-300"></div>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded-2xl max-w-6xl mx-auto bg-white shadow-md">
        <table className="table">
          <thead>
            <tr>
              <th>
                <div className="skeleton h-5 w-14 bg-gray-300"></div>
              </th>
              <th>
                <div className="skeleton h-5 w-16 bg-gray-300"></div>
              </th>
              <th>
                <div className="skeleton h-5 w-20 bg-gray-300"></div>
              </th>
              <th>
                <div className="skeleton h-5 w-14 bg-gray-300"></div>
              </th>
              <th>
                <div className="skeleton h-5 w-20 bg-gray-300"></div>
              </th>
            </tr>
          </thead>

          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i}>
                <td>
                  <div className="skeleton w-12 h-12 rounded-full bg-gray-300"></div>
                </td>

                <td>
                  <div className="skeleton h-5 w-32 bg-gray-300"></div>
                </td>

                <td>
                  <div className="skeleton h-5 w-52 bg-gray-300"></div>
                </td>

                <td>
                  <div className="skeleton h-7 w-16 rounded-full bg-gray-300"></div>
                </td>

                <td>
                  <div className="skeleton h-7 w-12 rounded-full bg-gray-300"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
