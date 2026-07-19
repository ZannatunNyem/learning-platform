import connectDB from "@/lib/mongodb";
import Progress from "@/models/Progress";
import Course from "@/models/Course";

import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";

export default async function ProgressPage() {
  await connectDB();

  const session = await getServerSession(authentication);

  if (!session) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Please login first.</h1>
      </div>
    );
  }

  const progresses = await Progress.find({
    userID: session.user.id,
  }).lean();

  const progressData = [];

  for (const progress of progresses) {
    const course = await Course.findById(progress.courseID).lean();

    if (!course) continue;

    const totalLectures = course.lectures.length;
    const completedLectures = progress.lectureCompleted?.length || 0;

    progressData.push({
      courseID: course._id.toString(),
      title: course.title,
      thumbnail: course.thumbnail,
      totalLectures,
      completedLectures,
      progress: Math.round((completedLectures / totalLectures) * 100),
      completed: progress.completed,
    });
  }

  const enrolledCourses = progressData.length;

  const completedCourses = progressData.filter(
    (course) => course.completed,
  ).length;

  const completedLectures = progressData.reduce(
    (sum, course) => sum + course.completedLectures,
    0,
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Progress</h1>

      {/* Stats */}
      {/* Stats */}
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div className="rounded-2xl p-6 text-center bg-gradient-to-br from-orange-500  to-pink-500 text-white shadow-lg  ">
          <h2 className="text-4xl font-bold">{enrolledCourses}</h2>
          <p className="mt-2 text-white/90 font-medium">Enrolled Courses</p>
        </div>

        <div className="rounded-2xl p-6 text-center bg-gradient-to-br from-green-600  to-emerald-700 text-white shadow-lg ">
          <h2 className="text-4xl font-bold">{completedCourses}</h2>
          <p className="mt-2 text-white/90 font-medium">Completed Courses</p>
        </div>

        <div className="rounded-2xl p-6 text-center bg-gradient-to-br from-purple-700  to-blue-500 text-white shadow-lg ">
          <h2 className="text-4xl font-bold">{completedLectures}</h2>
          <p className="mt-2 text-white/90 font-medium">Completed Lectures</p>
        </div>
      </div>

      {/* Course Progress */}
      <div className="space-y-6">
        {progressData.map((course) => (
          <div
            key={course.courseID}
            className="bg-gray-100 shadow-lg rounded-xl p-5"
          >
            <h2 className="text-xl font-bold">{course.title}</h2>

            <p className="my-2">
              {course.completedLectures} / {course.totalLectures} Lectures
            </p>

            <progress
              className="progress progress-success w-full"
              value={course.progress}
              max="100"
            ></progress>

            <p className="mt-2">{course.progress}% Complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}
