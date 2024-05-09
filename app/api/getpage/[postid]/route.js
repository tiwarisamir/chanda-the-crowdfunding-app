import { NextResponse } from "next/server";
import User from "@/models/User";
import { getServerSession } from "next-auth";
// import { authoptions } from "../auth/[...nextauth]/route";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";

export async function GET(req, res) {
  try {
    await connectDB();

    const id = await req.url.split("=")[1];

    const pageDetail = await donationPage.findOne({ _id: id });
    const organiser = await User.findOne({ _id: pageDetail.user });

    if (pageDetail) {
      return NextResponse.json({
        success: true,
        organiser: organiser,
        pageDetails: pageDetail,
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
