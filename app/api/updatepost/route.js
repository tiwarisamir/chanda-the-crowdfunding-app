import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import Post from "@/models/Post";
import Comment from "@/models/Comment";

export async function PUT(req, res) {
  try {
    await connectDB();
    const data = await req.json();

    if (data.updateType === "LIKE") {
      const postDetail = await Post.findById(data.postid);
      postDetail.like = Number(postDetail.like) + 1;
      postDetail.save();
    } else {
      const newComment = new Comment({
        post: data.postid,
        comment: data.comment,
        user: data.user,
        username: data.username,
        profilePic: data.profilePic,
      });

      await newComment.save();
    }

    return NextResponse.json({
      success: true,
      message: "Post updated successfully",
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
