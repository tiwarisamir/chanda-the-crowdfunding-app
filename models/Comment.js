import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  caption: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.models.Comment || model("Comment", commentSchema);
