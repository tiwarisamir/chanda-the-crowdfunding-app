import { NextResponse } from "next/server";
import donationPage from "@/models/donationPage";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const newPage = new donationPage({
      title: data.title,
      coverImage: data.coverImage,
      esewaProductCode: data.esewaProductCode,
      esewaSecret: data.esewaSecret,
      pageType: data.pageType,
      user: data.user,
    });

    await newPage.save();

    return NextResponse.json({
      success: true,
      message: "Page created successfully",
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
