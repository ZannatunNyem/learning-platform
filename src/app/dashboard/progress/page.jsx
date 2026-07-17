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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div className="bg-base-200 rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold">{enrolledCourses}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="bg-base-200 rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold">{completedCourses}</h2>
          <p>Completed Courses</p>
        </div>

        <div className="bg-base-200 rounded-xl p-5 text-center">
          <h2 className="text-3xl font-bold">{completedLectures}</h2>
          <p>Completed Lectures</p>
        </div>
      </div>

      {/* Course Progress */}
      <div className="space-y-6">
        {progressData.map((course) => (
          <div key={course.courseID} className="border rounded-xl p-5">
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
