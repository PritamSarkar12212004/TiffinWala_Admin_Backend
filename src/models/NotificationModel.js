import mongoose from "mongoose";

const NotificationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
  },
  senderImg: {
    type: String,
  },
  riciver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contentImg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 * 3,
  },
});

const NotificationModel = mongoose.model("Notification", NotificationSchema);
export default NotificationModel;
