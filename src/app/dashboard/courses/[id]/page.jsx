import Progress from "@/models/Progress";
import connectDB from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";
import EnrollButton from "@/app/component/button/EnrollButton";

async function getCourse(id) {
  const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }

  return res.json();
}

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const course = await getCourse(id);

  await connectDB();

  const session = await getServerSession(authentication);

  let isEnrolled = false;

  if (session) {
    const progress = await Progress.findOne({
      userID: session.user.id,
      courseID: id,
      enrolled: true,
    });

    isEnrolled = !!progress;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Thumbnail */}
      <img
        src={course.thumbnail}
        alt={course.title}
        width={1000}
        height={500}
        className="w-full h-80 object-cover rounded-xl"
      />

      {/* Course Info */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold">{course.title}</h1>

        <p className="mt-4 text-gray-600">{course.description}</p>

        <div className="flex gap-4 mt-5">
          <span className="badge badge-primary">{course.category}</span>
          <span className="badge badge-outline">{course.level}</span>
        </div>

        <p className="mt-5">
          <strong>Instructor:</strong> {course.instructor.name}
        </p>
      </div>

      {/* Lectures */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Course Lectures</h2>

        <div className="space-y-3">
          {course.lectures.map((lecture, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {isEnrolled ? "🔓" : "🔒"} {index + 1}. {lecture.title}
                </h3>

                <p className="text-sm text-gray-500">{lecture.duration}</p>
              </div>

              {isEnrolled ? (
                <button className="btn btn-success btn-sm">
                  Mark Complete
                </button>
              ) : (
                <button className="btn btn-disabled btn-sm" disabled>
                  Locked
                </button>
              )}
            </div>
          ))}
        </div>

        {!isEnrolled && (
          <div className="mt-6 p-5 rounded-xl bg-yellow-100 border border-yellow-300 text-center">
            <h3 className="text-lg font-semibold">🔒 Course Locked</h3>

            <p className="text-gray-700 mt-2">
              Enroll in this course to unlock all lectures.
            </p>

            <EnrollButton courseID={id} />
          </div>
        )}
      </div>
    </div>
  );
}
