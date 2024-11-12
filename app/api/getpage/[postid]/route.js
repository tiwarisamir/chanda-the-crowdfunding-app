import { NextResponse } from "next/server";
import User from "@/models/User";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";

export async function GET(req, context) {
  try {
    await connectDB();

    const id = context.params.postid;

    const pageDetail = await donationPage.findById(id);

    const organiser = await User.findById(pageDetail.user);
    const pay = await Payment.find({ to_page: id, done: true });

    if (pageDetail) {
      return NextResponse.json(
        {
          success: true,
          organiser: organiser,
          pageDetails: pageDetail,
          recentDonation: pay,
        },
        {
          status: 200,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Page not found",
      },
      {
        status: 404,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "error in fetshing page ",
        error: err,
      },
      {
        status: 500,
      }
    );
  }
}
