import connectDB from "@/lib/mongodb";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await connectDB();

  const { id } = await params;

  const course = await Course.findById(id);

  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(course);
}

export async function DELETE(request, { params }) {
  await connectDB();

  const { id } = await params;

  await Course.findByIdAndDelete(id);

  return NextResponse.json({
    message: "Course deleted successfully",
  });
}
