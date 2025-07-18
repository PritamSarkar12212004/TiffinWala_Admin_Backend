import mongoose from "mongoose";
const adminSchema = mongoose.Schema({
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
  User_Address: {
    type: {},
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
  User_Created_At: {
    type: Date,
    default: Date.now,
  },
});

const adminModel = mongoose.model("User", adminSchema);
export default adminModel;
