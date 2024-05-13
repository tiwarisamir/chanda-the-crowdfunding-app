import { NextResponse } from "next/server";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";
import Post from "@/models/Post";

export async function POST(req, res) {
  try {
    await connectDB();
    const data = await req.json();
    const newPost = new Post({
      caption: data.caption,
      coverImage: data.coverImage,
      page: data.page,
    });

    await newPost.save();

    return NextResponse.json({
      success: true,
      message: "Post created successfully",
    });
  } catch (err) {
    // console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
}
