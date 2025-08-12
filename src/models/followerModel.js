import mongoose from "mongoose";
const followerSchema = mongoose.Schema({
  followerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  followerLocation: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: undefined,
    },
  },
  followerLocation: {
    type: String,
    required: [true, "Post location is required"],
  },
  followingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

followerSchema.index({ location: "2dsphere" });
const followerModel = mongoose.model("Post", followerSchema);
export default followerModel;
