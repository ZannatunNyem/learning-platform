import Link from "next/link";
import { getServerSession } from "next-auth";

import { authentication } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Progress from "@/models/Progress";
import Course from "@/models/Course";

export default async function MyCoursesPage() {
  await connectDB();

  const session = await getServerSession(authentication);

  if (!session) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Please login first.</h1>
      </div>
    );
  }

  const progress = await Progress.find({
    userID: session.user.id,
    enrolled: true,
  });

  const courseIds = progress.map((item) => item.courseID);

  const courses = await Course.find({
    _id: { $in: courseIds },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
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

            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                {course.title}
              </h2>

              <div className="mt-3 flex items-center justify-between mb-5">
                <span className="text-sm font-medium text-green-600">
                  {course.level}
                </span>

                <span className="text-xs text-gray-400">
                  {course.lectures?.length || 0} Lessons
                </span>
              </div>

              <Link
                href={`/dashboard/courses/${course._id}`}
                className="btn btn-primary mt-auto w-full"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
