import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

import { NextResponse } from "next/server";

import Course from "@/models/Course";
export async function GET() {
  await connectDB();

  const courses = await mongoose.connection.db
    .collection("courses")
    .find({})
    .toArray();

  return Response.json(courses);
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const course = await Course.create(body);

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add course" },
      { status: 500 },
    );
  }
}
