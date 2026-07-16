import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="relative rounded-xl border shadow hover:shadow-lg transition overflow-hidden bg-white">
      {/* Category Badge */}
      <span className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
        {course.category}
      </span>

      {/* Course Image */}
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{course.title}</h2>

        <p className="text-gray-500 my-3 line-clamp-2">{course.description}</p>

        <span className="text-sm font-medium text-gray-600">
          {course.level}
        </span>
        {/* Level + Enroll Button */}
        <div className="flex  items-center justify-between mt-4">
          <button className="btn bg-green-600 hover:bg-green-700 px-6 py-3 text-base border-0">
            Enroll
          </button>
          <button className="btn bg-green-600 hover:bg-green-700 px-6 py-3 text-base border-0">
            <Link href={`/dashboard/courses/${course._id}`}>View Course</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
