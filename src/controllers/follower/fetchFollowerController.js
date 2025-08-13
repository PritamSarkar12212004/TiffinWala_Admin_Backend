import followerModel from "../../models/followerModel.js";

const fetchFollowerController = async (req, res) => {
  const { id } = req.body.payload;
  const fetchFollower = await followerModel.find({ followingId: id });
  if (fetchFollower) {
    res.status(200).json({ success: true, data: fetchFollower });
  } else {
    res.status(404).json({ success: false, data: null });
  }
};
export default fetchFollowerController;
