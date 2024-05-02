"use server";

import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { connect } from "mongoose";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
};
