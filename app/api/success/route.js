import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { redirect } from "next/navigation";
import { createSignature } from "../handlepay/route";

export async function GET(req, res) {
  try {
    const id = await req.url.split("=")[1];
    const decodeData = JSON.parse(Buffer.from(id, "base64").toString("utf-8"));
    // console.log("yo decoded data ho :", decodeData);

    const message = decodeData.signed_field_names
      .split(",")
      .map((field) => `${field}=${decodeData[field] || ""}`)
      .join(",");
    // console.log("yo message ho signature ko lagi : ", message);

    const signature = createSignature(message);
    if (signature !== decodeData.signature) {
      return NextResponse.json({
        success: false,
        message: "integrity error",
      });
    }

    return NextResponse.redirect("http://localhost:3000");
  } catch (err) {
    console.log("error in success: ", err);
    return NextResponse.json({
      error: err || "Something went wrong",
    });
  }
}
