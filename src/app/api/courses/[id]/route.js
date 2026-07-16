import connectDB from "@/lib/mongodb";
import Courses from "@/models/Course";

export async function GET(request, { params }) {
  await connectDB();

  const { id } = await params;

  const course = await Courses.findById(id);

  if (!course) {
    return Response.json({ message: "Course not found" }, { status: 404 });
  }

  return Response.json(course);
}
