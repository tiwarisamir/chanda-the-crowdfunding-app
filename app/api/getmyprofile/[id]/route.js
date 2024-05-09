import connectDB from "@/db/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();
    // console.log("*******************************************/*");
    const id = await req.headers["id"];
    // const id = await req.json();
    // console.log("yo req ho :", id);

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
