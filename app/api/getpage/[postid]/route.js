import { NextResponse } from "next/server";
import User from "@/models/User";
import { getServerSession } from "next-auth";
// import { authoptions } from "../auth/[...nextauth]/route";
import donationPage from "@/models/donationPage";

export async function GET(req, res) {
  try {
    // const {
    //   query: { postid }, // Extract 'postid' from the request URL
    //   method,
    // } = req;

    console.log("yo getpage ho: ", req);
    // const session = await getServerSession(authoptions);

    // const currentUser = await User.findOne({ email: session?.user?.email });
    // const pageDetail = await donationPage.find({ user: currentUser?._id });

    // if (currentUser) {
    //   return NextResponse.json({
    //     success: true,
    //     user: currentUser,
    //     pageDetails: pageDetail,
    //   });
    // }

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
