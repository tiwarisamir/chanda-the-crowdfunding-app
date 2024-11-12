import { NextResponse } from "next/server";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";
import Post from "@/models/Post";
import Comment from "@/models/Comment";

export async function GET(req, context) {
  try {
    await connectDB();

    const id = context.params.postid;

    const commentDetail = await Comment.find({ post: id });

    if (commentDetail) {
      return NextResponse.json({
        success: true,
        comment: commentDetail,
      });
    }

    return NextResponse.json({
      success: false,
      message: "page not found",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
