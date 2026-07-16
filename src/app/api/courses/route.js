import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  await connectDB();

  const courses = await mongoose.connection.db
    .collection("courses")
    .find({})
    .toArray();

  return Response.json(courses);
}
