import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    const data = await req.json();
    connectDB();

    const currentUser = await User.findOne({ email: data.email });
    if (currentUser) {
      return NextResponse.json({
        success: false,
        message: "User already exist",
      });
    } else {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const newUser = new User({
        username: data.username,
        bio: data.bio,
        email: data.email,
        password: hashedPassword,
        profilepic: data.profilepic,
      });
      await newUser.save();
    }

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
      userdetail: {
        email: data.email,
        password: data.password,
      },
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
}
