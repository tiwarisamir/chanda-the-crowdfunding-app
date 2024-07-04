import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";

export const createSignature = (message, secret) => {
  // const secret = "8gBm/:&EnhH.1/q"; //different in production
  // Create an HMAC-SHA256 hash
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(message);

  // Get the digest in base64 format
  const hashInBase64 = hmac.digest("base64");
  return hashInBase64;
};

export async function POST(req, res) {
  const data = await req.json();
  // console.log("pay bata aako data : ", data);

  // return NextResponse.json(data);
  const transaction_uuid = uuidv4();

  if (data.payment_method === "esewa") {
    try {
      await connectDB();

      const newPayment = new Payment({
        name: data.name,
        from_user: data.from_user,
        to_page: data.to_page,
        transaction_uuid: transaction_uuid,
        message: data.message,
        amount: data.amount,
        payment_method: data.payment_method,
        esewaSecret: data.esewaSecret,
      });

      await newPayment.save();

      const signature = createSignature(
        `total_amount=${data.amount},transaction_uuid=${transaction_uuid},product_code=${data.esewaProductCode}`,
        data.esewaSecret
      );
      if (data.payment_method === "esewa") {
        const formData = {
          amount: data.amount,
          failure_url: `${process.env.NEXTAUTH_URL}/c/${data.to_page}`,
          product_delivery_charge: "0",
          product_service_charge: "0",
          product_code: data.esewaProductCode,
          signature: signature,
          signed_field_names: "total_amount,transaction_uuid,product_code",
          success_url: `${process.env.NEXTAUTH_URL}/api/success`,
          tax_amount: "0",
          total_amount: data.amount,
          transaction_uuid: transaction_uuid,
        };

        const responseData = {
          message: "Order Created Sucessfully",
          formData,
        };

        return NextResponse.json(responseData);
      }
    } catch (err) {
      return NextResponse.json({
        error: err?.message || "Something went wrong",
      });
    }
  } else {
    try {
      const transaction_uuid = uuidv4();

      await connectDB();

      const newPayment = new Payment({
        name: data.name,
        from_user: data.from_user,
        to_page: data.to_page,
        transaction_uuid: transaction_uuid,
        message: data.message,
        amount: data.amount,
        payment_method: data.payment_method,
      });

      await newPayment.save();

      const res = await fetch(
        "https://a.khalti.com/api/v2/epayment/initiate/",

        {
          method: "POST",
          headers: {
            Authorization: `${process.env.KHALTI_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            return_url: `http://localhost:3000/c/${data.to_page}`,
            website_url: "http://localhost:3000/",
            amount: data?.amount * 100,
            purchase_order_id: transaction_uuid,
            purchase_order_name: "fundraising",
          }),
        }
      );

      console.log(res.body);
      if (res.status === 200) {
        return NextResponse.json("pay vayo");
      } else {
        return NextResponse.json("pay ----");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
