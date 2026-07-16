import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authentication } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Progress from "@/models/Progress";

export async function POST(req) {
  try {
    await connectDB();
    const session = await getServerSession(authentication);

    console.log("😍", session);

    if (!session) {
      return NextResponse.json(
        { message: "Please login first." },
        { status: 401 },
      );
    }

    const { courseID } = await req.json();

    // Check if already enrolled
    const existing = await Progress.findOne({
      userID: session.user.id,
      courseID,
    });

    if (existing) {
      return NextResponse.json(
        { message: "Already enrolled." },
        { status: 200 },
      );
    }

    await Progress.create({
      userID: session.user.id,
      courseID,
      enrolled: true,
      completed: false,
      lectureCompleted: [],
    });

    return NextResponse.json(
      { message: "Enrollment successful." },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
