import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: { type: String, required: true },
  profilePic: { type: String },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.models.Comment || model("Comment", commentSchema);
