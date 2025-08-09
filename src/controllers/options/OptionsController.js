import adminModel from "../../models/adminModel.js";

const OptionsController = async (req, res) => {
  const { id, path, value } = req.body;
  try {
    const updateField = {};
    updateField[`UserPrivacyOptions.${path}`] = value;
    const updatedUser = await adminModel.findByIdAndUpdate(
      id,
      { $set: updateField },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ success: false, message: "User not found" });
      return { success: false, message: "User not found" };
    }
    res.status(200).json({ success: true, data: value });
  } catch (error) {
    console.error("Error updating privacy option:", error);
    return { success: false, message: error.message };
  }
};

export default OptionsController;
