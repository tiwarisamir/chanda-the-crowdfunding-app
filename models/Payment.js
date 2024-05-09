import mongoose from "mongoose";

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
  name: { type: String, default: "Anonymous" },
  to_page: { type: String, required: true },
  transaction_uuid: { type: String, required: true },
  transaction_code: { type: String },
  message: { type: String },
  amount: { type: Number, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.models.Payment || model("Payment", paymentSchema);
