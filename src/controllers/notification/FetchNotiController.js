import NotificationModel from "../../models/NotificationModel.js";

const FetchNotiController = async (req, res) => {
  const { id } = req.body.payload;
  const fetchNoti = await NotificationModel.find({ riciver: id }).sort({
    date: -1,
  });
  if (fetchNoti) {
    res.status(200).json({ success: true, data: fetchNoti });
  } else {
    res.status(404).json({ success: false, data: null });
  }
};

export default FetchNotiController;
