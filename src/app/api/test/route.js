import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    // Connect to your database
    const db = client.db("learnify_db");

    // Ping the database
    await db.command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "MongoDB Atlas Connected Successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
