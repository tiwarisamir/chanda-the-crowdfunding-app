import { NextResponse } from "next/server";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";

export async function GET(req, res) {
  try {
    await connectDB();
    const pageDetails = await donationPage.find({}).limit(6);

    if (pageDetails) {
      return NextResponse.json({
        success: true,

        pageDetails: pageDetails,
      });
    }
    return NextResponse.json({
      success: false,
      message: "No page to show",
    });
  } catch (err) {
    // console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
