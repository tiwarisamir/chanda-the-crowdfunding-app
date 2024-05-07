import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth";
import { authoptions } from "../auth/[...nextauth]/route";

export async function GET(req, res) {
  try {
    connectDB();
    const session = await getServerSession(authoptions);

    const currentUser = await User.findOne({ email: session.user.email });

    if (currentUser) {
      return NextResponse.json({
        success: true,
        user: currentUser,
      });
    }
    return NextResponse.json({
      success: false,
      message: "User not found",
    });
  } catch (err) {
    console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
