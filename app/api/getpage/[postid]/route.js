import { NextResponse } from "next/server";
import User from "@/models/User";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";

export async function GET(req, res) {
  try {
    await connectDB();

    // console.log("yo req ho page ko :", req);
    // console.log("yo search ho page ko :", req.search);
    // console.log("yo searchParams ho page ko :", req.searchParams);
    // console.log("yo sano url ho page ko :", req.url);
    // console.log("yo thulo URL ho page ko :", req.URL);
    const id = await req.url.split("=")[1];
    // console.log("yo pageid ho page ko :", id);

    console.log("/*******************************************11111 ");
    const pageDetail = await donationPage.findById(id);
    console.log("yo pageDetail  ho page ko :", pageDetail);
    console.log("/*******************************************22222 ");
    const organiser = await User.findById(pageDetail.user);
    console.log("yo organiser  ho page ko :", organiser);

    console.log("/*******************************************22222 ");
    const pay = await Payment.find({ to_page: id, done: true });
    console.log("yo pay  ho page ko :", pay);

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
      message: "error in fetshing page 2ks",
      error: err,
    });
  }
}
