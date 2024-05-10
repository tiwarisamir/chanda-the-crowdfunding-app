import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema({
  caption: { type: String, required: true },
  coverImage: { type: String },
  like: { type: Number, default: 0 },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "donationPage",
    required: true,
  },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.models.Post || model("Post", postSchema);
