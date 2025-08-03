import adminModel from "../../models/adminModel.js";

const AuthProvideDataController = async (req, res) => {
  const number = req.body.number;
  const findData = await adminModel.findOne({ User_Phone_Number: number });
  if (findData) {
    res.status(200).json({
      user: true,
      login: true,
      data: findData,
    });
  } else {
    res.status(200).json({
      user: false,
      login: false,
      data: null,
    });
  }
};
export default AuthProvideDataController;
