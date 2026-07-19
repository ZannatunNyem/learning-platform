import connectDB from "@/lib/mongodb";
import Progress from "@/models/Progress";
import Courses from "@/models/Course";

import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authentication);

    if (!session) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { courseID, lectureID } = await req.json();

    const progress = await Progress.findOne({
      userID: session.user.id,
      courseID,
    });

    if (!progress) {
      return Response.json(
        { message: "Course not enrolled." },
        { status: 404 },
      );
    }

    // completed
    if (progress.lectureCompleted.includes(lectureID)) {
      return Response.json({
        message: "Lecture already completed.",
      });
    }

    // add lecture
    progress.lectureCompleted.push(lectureID);

    //total lectures
    const course = await Courses.findById(courseID);

    const totalLectures = course.lectures.length;

    //percentage
    progress.progressPercent = Math.round(
      (progress.lectureCompleted.length / totalLectures) * 100,
    );

    //completed
    if (progress.lectureCompleted.length === totalLectures) {
      progress.completed = true;
    }

    await progress.save();

    return Response.json({
      message: "Lecture completed successfully!",
      progress,
    });
  } catch (error) {
    console.log(error);

    return Response.json({ message: "Server Error" }, { status: 500 });
  }
}
