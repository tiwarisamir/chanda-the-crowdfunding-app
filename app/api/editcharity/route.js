import { NextResponse } from "next/server";
import donationPage from "@/models/donationPage";
import connectDB from "@/db/connectDB";

export async function POST(req, res) {
  try {
    await connectDB();
    const data = await req.json();

    const currentDonationPage = await donationPage.findById(data.pageId);

    // console.log("yo current donation page details ho :", currentDonationPage);

    if (data.title.length !== 0) {
      currentDonationPage.title = data.title;
    }
    if (data.coverImage.length !== 0) {
      currentDonationPage.coverImage = data.coverImage;
    }
    if (data.esewaProductCode.length !== 0) {
      currentDonationPage.esewaProductCode = data.esewaProductCode;
    }
    if (data.esewaSecret.length !== 0) {
      currentDonationPage.esewaSecret = data.esewaSecret;
    }
    if (data.description.length !== 0) {
      currentDonationPage.description = data.description;
    }
    if (data.targetAmount.length !== 0) {
      currentDonationPage.targetAmount = data.targetAmount;
    }

    await currentDonationPage.save();

    return NextResponse.json({
      success: true,
      message: "Page edited successfully",
    });
  } catch (err) {
    console.log("error aayo: ", err);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
}
