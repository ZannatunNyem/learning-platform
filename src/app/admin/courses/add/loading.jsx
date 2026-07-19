export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <span className="loading loading-spinner loading-lg text-warning"></span>

      <p className="mt-4 text-4xl font-medium text-gray-500">Loading ...</p>
    </div>
  );
}
