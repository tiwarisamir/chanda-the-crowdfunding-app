import { NextResponse } from "next/server";
import { createSignature } from "../handlepay/route";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import donationPage from "@/models/donationPage";
import { parse } from "url";

// Optional: Data fetching/validation in getServerSideProps
export async function getServerSideProps(context) {
  const { req } = context; // Access the request object
  const parsedUrl = parse(req.url, true);
  const data = parsedUrl.query.data;

  // Optionally perform any data fetching or validation here based on the query parameter (data)

  return {
    props: { data }, // Pass the data to the API route component
  };
}

export default async function handler({ data }) {
  // Receive data from getServerSideProps (optional)
  try {
    const decodeData = JSON.parse(
      Buffer.from(data, "base64").toString("utf-8")
    );

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

    return NextResponse.redirect(
      `${process.env.NEXTAUTH_URL}/c/${paymentData.to_page}`
    );
  } catch (err) {
    console.log("error in success: ", err);
    return NextResponse.json({
      error: err || "Something went wrong",
    });
  }
}
