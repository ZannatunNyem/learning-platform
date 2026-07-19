import Link from "next/link";
import connectDB from "@/lib/mongodb";
import Course from "@/models/Course";
import DeleteCourseButton from "@/app/component/button/DeleteCourseButton";

export default async function ManageCoursesPage() {
  await connectDB();

  const courses = await Course.find();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-600">Manage Courses</h1>

        <Link href="/admin/courses/add" className="btn btn-primary">
          Add Course
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
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

                <span className="text-xs text-gray-400">
                  {course.lectures?.length || 0} Lessons
                </span>
              </div>

              <div className="mt-auto pt-5 ">
                <DeleteCourseButton id={course._id.toString()} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
