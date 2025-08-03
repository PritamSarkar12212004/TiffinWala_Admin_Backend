import adminModel from "../../models/adminModel.js";
const MainDataProvider = async (req, res) => {
  try {
    const { phone } = req.body;
    const findData = await adminModel.findOne({ User_Phone_Number: phone });
    if (findData) {
      res.status(200).json({
        success: true,
        message: "Data Fetch successFull",
        data: findData,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User Not Found Frist Cerate the User",
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Somthing Went wrong with data Provider",
      error: error.message,
    });
  }
};
export default MainDataProvider;
