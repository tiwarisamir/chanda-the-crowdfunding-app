import mongoose from "mongoose";
const { Schema, model } = mongoose;

const pageSchema = new Schema({
  title: { type: String, required: true },
  coverImage: { type: String },
  description: { type: String },
  targetAmount: { type: Number },
  raisedAmount: { type: Number, default: 0 },
  esewaProductCode: { type: String, select: false },
  esewaSecret: { type: String, select: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pageType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.models.donationPage ||
  model("donationPage", pageSchema);
