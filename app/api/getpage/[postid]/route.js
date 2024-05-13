import { NextResponse } from "next/server";
import User from "@/models/User";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";

export async function GET(req, res) {
  try {
    await connectDB();

    const id = await req.url.split("=")[1];
    console.log("yo id ho page ko :", id);

    const pageDetail = await donationPage.find(id);
    const organiser = await User.find(pageDetail.user);
    const pay = await Payment.find({ to_page: id, done: true });

    if (pageDetail) {
      return NextResponse.json({
        success: true,
        organiser: organiser,
        pageDetails: pageDetail,
        recentDonation: pay,
      });
    }

    return NextResponse.json({
      success: false,
      message: "Page not found",
    });
  } catch (err) {
    console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      message: "error in fetshing post 2ks",
      error: err,
    });
  }
}
