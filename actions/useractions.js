"use server";

import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { connect } from "mongoose";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const createSignature = (message) => {
  const secret = "8gBm/:&EnhH.1/q"; //different in production
  // Create an HMAC-SHA256 hash
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(message);

  // Get the digest in base64 format
  const hashInBase64 = hmac.digest("base64");
  return hashInBase64;
};

const initiate = async () => {
  try {
    const order = {
      payment_method: "esewa",
      amount: 500,
      _id: uuidv4(),
    };
    const signature = this.createSignature(
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
        success_url: "http://localhost:5005/api/esewa/success",
        tax_amount: "0",
        total_amount: order.amount,
        transaction_uuid: order._id,
      };
      // res.json({
      //   message: "Order Created Sucessfully",
      //   order,
      //   payment_method: "esewa",
      //   formData,
      // });
      // } else if (order.payment_method === "khalti") {
      //   const formData = {
      //     return_url: "http://localhost:5005/api/khalti/callback",
      //     website_url: "http://localhost:5005",
      //     amount: order.amount * 100, //paisa
      //     purchase_order_id: order._id,
      //     purchase_order_name: "test",
      //   };
    }
  } catch (err) {
    return err;
  }
  console.log("this is server");
  return formData;
};

export default initiate;
