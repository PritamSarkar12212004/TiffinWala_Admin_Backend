import MainDataProviderFunc from "../../functions/MainDataProviderFunc.js";
import adminModel from "../../models/adminModel.js";

const UpdateProductController = async (req, res) => {
  try {
    const {
      name,
      email,
      address,
      bio,
      latitude,
      longitude,
      image,
      id,
      gender,
    } = req.body;

    const fullAddress = {
      latitude: latitude,
      longitude: longitude,
      address: address,
    };

    // Create update object dynamically
    const updateFields = {
      User_Address: fullAddress,
    };
    if (name !== undefined) updateFields.User_Name = name;
    if (email !== undefined) updateFields.User_Email = email;
    if (bio !== undefined) updateFields.User_Bio = bio;
    if (gender !== undefined) updateFields.User_Gender = gender;
    if (image !== undefined && image !== null && image !== "") {
      updateFields.User_Image = image;
    }

    const updateUser = await adminModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (updateUser) {
      const fetchHoleData = await MainDataProviderFunc(
        updateUser.User_Phone_Number
      );
      if (fetchHoleData === null) {
        res.status(404).json({
          message: "somthing Went Worng To fetch Hole data",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: fetchHoleData.findData,
        productData: fetchHoleData.productPayload,
        ProduatTotoalData: fetchHoleData.productData,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Profile update failed",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default UpdateProductController;
