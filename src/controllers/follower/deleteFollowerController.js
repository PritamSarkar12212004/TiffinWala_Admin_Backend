import followerModel from "../../models/followerModel.js";

const deleteFollowerController = async (req, res) => {
  const { id } = req.body.payload;
  const deleteFollower = await followerModel.findByIdAndDelete(id);
  if (deleteFollower) {
    res.status(200).json({ success: true, data: deleteFollower });
  } else {
    res.status(404).json({ success: false, data: null });
  }
};
export default deleteFollowerController;
