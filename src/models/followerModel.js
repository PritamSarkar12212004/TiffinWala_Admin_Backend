import mongoose from "mongoose";
const followerSchema = mongoose.Schema({
  followerId: {
    type: String,
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
  followerLocationName: {
    type: String,
    required: [true, "Follower location name is required"],
  },
  followingId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

followerSchema.index({ followerLocation: "2dsphere" });
const followerModel = mongoose.model("follower", followerSchema);
export default followerModel;
