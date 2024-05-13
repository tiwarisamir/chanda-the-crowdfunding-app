import { NextResponse } from "next/server";
import { createSignature } from "../handlepay/route";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import donationPage from "@/models/donationPage";

export async function GET(req, res) {
  try {
    // console.log("yo query ho in success url :", req.query);
    const parsedUrl = parse(req.url, true);
    console.log("yo req ho", req);
    console.log("yo req.query ho", req.query);
    console.log("yo req.url ho", req.url);
    const { data } = parsedUrl.data;
    console.log("yo data ho", data);
    // const id = await req.url.split("=")[1];
    // const { data } = req.query;

    const decodeData = JSON.parse(
      Buffer.from(data, "base64").toString("utf-8")
    );
    // console.log("yo decoded data ho :", decodeData);

    const message = decodeData.signed_field_names
      .split(",")
      .map((field) => `${field}=${decodeData[field] || ""}`)
      .join(",");

    await connectDB();

    const paymentData = await Payment.findOne({
      transaction_uuid: decodeData.transaction_uuid,
    }).select("+esewaSecret");
    const donation = await donationPage.findById(paymentData.to_page);

    const signature = createSignature(message, paymentData.esewaSecret);
    if (signature !== decodeData.signature) {
      return NextResponse.json({
        success: false,
        message: "integrity error",
      });
    }
    donation.raisedAmount =
      Number(donation.raisedAmount) + Number(decodeData.total_amount);
    donation.donationCount = Number(donation.donationCount) + 1;

    await donation.save();

    paymentData.done = true;
    paymentData.transaction_code = decodeData.transaction_uuid;
    await paymentData.save();

    return NextResponse.redirect(`/c/${paymentData.to_page}`);
  } catch (err) {
    console.log("error in success: ", err);
    return NextResponse.json({
      error: err || "Something went wrong",
    });
  }
}
