import { NextResponse } from "next/server";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";
import Post from "@/models/Post";

export async function GET(req, res) {
  try {
    await connectDB();

    const id = await req.url.split("=")[1];

    const postDetail = await Post.find({ page: id });

    if (postDetail) {
      return NextResponse.json({
        success: true,
        postDetails: postDetail,
      });
    }

    return NextResponse.json({
      success: false,
      message: "page not found",
    });
  } catch (err) {
    console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
