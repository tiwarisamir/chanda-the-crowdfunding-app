import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export const createSignature = (message) => {
  const secret = "8gBm/:&EnhH.1/q"; //different in production
  // Create an HMAC-SHA256 hash
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(message);

  // Get the digest in base64 format
  const hashInBase64 = hmac.digest("base64");
  return hashInBase64;
};

export async function POST(req, res) {
  const data = await req.json();

  // console.log("request yo ho: ", data);

  // return NextResponse.json(data);

  const order = {
    payment_method: "esewa",
    amount: 100,
    _id: uuidv4(),
  };
  try {
    const signature = createSignature(
      `total_amount=${order.amount},transaction_uuid=${order._id},product_code=EPAYTEST`
    );
    if (order.payment_method === "esewa") {
      const formData = {
        amount: order.amount,
        failure_url: "http://localhost:5173",
        product_delivery_charge: "0",
        product_service_charge: "0",
        product_code: "EPAYTEST",
        signature: signature,
        signed_field_names: "total_amount,transaction_uuid,product_code",
        success_url: "http://localhost:3000/api/success",
        tax_amount: "0",
        total_amount: order.amount,
        transaction_uuid: order._id,
      };

      const responseData = {
        message: "Order Created Sucessfully",
        order,
        payment_method: "esewa",
        formData,
      };

      return NextResponse.json(responseData);
    }
  } catch (err) {
    // return res.status(400).json({ error: err?.message || "No Orders found" });
    return NextResponse.json({
      error: err?.message || "No Orders found",
    });
  }
}
