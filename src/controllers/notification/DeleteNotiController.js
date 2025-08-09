import NotificationModel from "../../models/NotificationModel.js";

const DeleteNotiController = async (req, res) => {
  const { id } = req.body.payload;
  const deleteNoti = await NotificationModel.findByIdAndDelete(id);
  if (deleteNoti) {
    res.status(200).json({ success: true, data: deleteNoti });
  } else {
    res.status(404).json({ success: false, data: null });
  }
};
export default DeleteNotiController;
