import adminModel from "../../models/adminModel.js";

const CreateprofileController = async (req, res) => {
  const { Description, Name, email, location, profileImage, phone, gender } =
    req.body;
  if (
    !Description ||
    !Name ||
    !email ||
    !location ||
    !profileImage ||
    !phone ||
    !gender
  ) {
    return res.status(400).json({ message: "All fields are required" });
  } else {
    const createProfile = await adminModel
      .create({
        User_Name: Name,
        User_Image: profileImage,
        User_Email: email,
        User_Phone_Number: phone,
        User_Bio: Description,
        User_Address: location,
        User_Gender: gender,
      })
      .then((result) => {
        return res.status(201).json({
          message: "Profile created successfully",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ message: "Error creating profile" });
      });
  }
};
export default CreateprofileController;
