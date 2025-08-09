import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  User_Name: {
    type: String,
  },
  User_Image: {
    type: String,
  },
  User_Email: {
    type: String,
  },
  User_Phone_Number: {
    type: String,
  },
  User_Gender: {
    type: String,
  },
  User_Bio: {
    type: String,
  },
  User_Post_Count: [
    {
      PostId: {
        type: String,
      },
    },
  ],
  User_Address: {
    type: Object,
  },
  token: {
    type: String,
    default: null,
  },
  User_Followers: [
    {
      FollowersId: {
        type: String,
      },
    },
  ],
  UserPrivacyOptions: {
    Profile: {
      ShowEmail: {
        type: Boolean,
        default: true,
      },
      ShowLocation: {
        type: Boolean,
        default: true,
      },
    },
    Notification: {
      AllowPushNotifications: {
        type: Boolean,
        default: true,
      },
      AllowMarketing: {
        type: Boolean,
        default: true,
      },
    },
    DataAnalytics: {
      KeepHistory: {
        type: Boolean,
        default: true,
      },
      AllowDataSharing: {
        type: Boolean,
        default: true,
      },
      AnalyticData: {
        type: Boolean,
        default: true,
      },
    },
  },
  User_Created_At: {
    type: Date,
    default: Date.now,
  },
});

const adminModel = mongoose.model("User", adminSchema);
export default adminModel;
