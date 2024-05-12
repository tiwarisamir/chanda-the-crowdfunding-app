import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Comment from "@/models/Comment";

export async function POST(req, res) {
  try {
    const data = await req.json();
    connectDB();

    const currentUser = await User.findById(data.id);

    if (data.username) {
      currentUser.username = data?.username;
    }
    if (data.profilepic) {
      currentUser.profilepic = data.profilepic;
    }
    if (data.bio) {
      currentUser.bio = data.bio;
    }
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
