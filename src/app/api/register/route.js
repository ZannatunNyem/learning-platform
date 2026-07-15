import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import Swal from "sweetalert2";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password, image } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    const hiddenPassword = await bcrypt.hash(password, 10); // hidden password

    await User.create({
      name,
      email,
      password: hiddenPassword,
      image,
      role: "user",
    });

    return NextResponse.json(
      { message: "Successfully Registered" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
