import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import Post from "@/models/Post";

export async function GET(req, context) {
  try {
    await connectDB();

    const id = context.params.postid;

    const postDetail = await Post.find({ page: id });

    if (postDetail) {
      return NextResponse.json({
        success: true,
        postDetails: postDetail,
      });
    }

    return NextResponse.json({
      success: false,
      message: "post not found",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
