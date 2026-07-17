// import { NextResponse } from "next/server";
// import connectDB from "@/lib/mongodb";
// import Course from "@/models/Course";

// export async function GET(req, { params }) {
//   try {
//     await connectDB();

//     const { id } = await params;

//     const course = await Course.findById(id);

//     if (!course) {
//       return NextResponse.json(
//         { message: "Course not found" },
//         { status: 404 },
//       );
//     }

//     return NextResponse.json(course);
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json({ message: "Server Error" }, { status: 500 });
//   }
// }
