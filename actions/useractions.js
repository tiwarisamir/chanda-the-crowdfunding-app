"use server";

import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { connect } from "mongoose";
import crypto from "crypto";

export const initiate = async () => {
  const createSignature = (message) => {
    const secret = "8gBm/:&EnhH.1/q";

    const hmac = crypto.createHmac("sha256", secret);

    hmac.update(message);

    const hashInBase64 = hmac.digest("base64");
    return hashInBase64;
  };

  const signature = createSignature(
    `total_amount=110,transaction_uuid=ab14a8f2b02c3,product_code= EPAYTEST`
  );

  const formData = {
    amount: "100",
    failure_url: "http://localhost:3000",
    product_delivery_charge: "0",
    product_service_charge: "0",
    product_code: "EPAYTEST",
    signature: signature,
    signed_field_names: "total_amount,transaction_uuid,product_code",
    success_url: "http://localhost:3000/profile",
    tax_amount: "10",
    total_amount: "110",
    transaction_uuid: "ab14a8f2b02c3",
  };

  return formData;
};
