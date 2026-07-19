import Link from "next/link";
import EnrollButton from "./button/EnrollButton";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col min-h-[230px]">
      {/* Image */}
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-44 object-cover"
        />

        <span className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {course.title}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-green-600">
            {course.level}
          </span>

          <span className="text-xs text-gray-400">8 Lessons</span>
        </div>

        <div className="mt-auto pt-5 flex gap-3">
          <div className="flex-1">
            <EnrollButton courseID={course._id} />
          </div>

          <Link
            href={`/dashboard/courses/${course._id}`}
            className="btn btn-outline btn-success flex-1"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
