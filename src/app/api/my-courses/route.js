import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";

import { authentication } from "@/lib/auth";
import connectDB from "@/lib/mongodb";

import Progress from "@/models/Progress";
import Course from "@/models/Course";

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authentication);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 👇 Put the new code here
    const progress = await Progress.find({
      userID: session.user.id,
      enrolled: true,
    });

    const courseIds = progress.map(
      (item) => new mongoose.Types.ObjectId(item.courseID)
    );

    const courses = await Course.find({
      _id: {
        $in: courseIds,
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}