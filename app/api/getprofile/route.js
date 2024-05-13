import { NextResponse } from "next/server";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authoptions } from "../auth/[...nextauth]/route";
import donationPage from "@/models/donationPage";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

export async function GET(req, res) {
  try {
    await connectDB();
    const session = await getServerSession(authoptions);

    const currentUser = await User.findOne({ email: session?.user?.email });
    const pageDetail = await donationPage.find({ user: currentUser?._id });
    const paymentDetails = await Payment.find({
      from_user: currentUser?._id,
      done: true,
    });

    if (currentUser) {
      return NextResponse.json({
        success: true,
        user: currentUser,
        pageDetails: pageDetail,
        paymentDetails: paymentDetails,
      });
    }
    return NextResponse.json({
      success: false,
      message: "User not found",
    });
  } catch (err) {
    // console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      error: err,
    });
  }
}
