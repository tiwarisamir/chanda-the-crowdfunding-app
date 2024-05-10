import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    const data = await req.json();
    connectDB();

    const currentUser = await User.findById(data.id);
    // console.log("yo edited data ho : ", currentUser);
    currentUser.username = data.username;
    currentUser.profilepic = data.profilepic;
    currentUser.bio = data.bio;
    await currentUser.save();

    return NextResponse.json({
      success: true,
      message: "details changed successfully",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
}
