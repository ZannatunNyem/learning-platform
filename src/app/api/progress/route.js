import connectDB from "@/lib/mongodb";
import Progress from "@/models/Progress";
import Course from "@/models/Course";

import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authentication);

    if (!session) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const progresses = await Progress.find({
      userID: session.user.id,
    });

    const result = [];

    for (const progress of progresses) {
      const course = await Course.findById(progress.courseID);

      if (!course) continue;

      const totalLectures = course.lectures.length;
      const completedLectures = progress.lectureCompleted.length;

      result.push({
        courseID: course._id,
        title: course.title,
        thumbnail: course.thumbnail,
        totalLectures,
        completedLectures,
        progress: Math.round((completedLectures / totalLectures) * 100),
        completed: progress.completed,
      });
    }

    return Response.json(result);
  } catch (error) {
    console.log(error);

    return Response.json({ message: "Server Error" }, { status: 500 });
  }
}
