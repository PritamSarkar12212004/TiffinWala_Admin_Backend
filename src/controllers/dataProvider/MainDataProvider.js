import MainDataProviderFunc from "../../functions/MainDataProviderFunc.js";

const MainDataProvider = async (req, res) => {
  try {
    const { phone } = req.body;
    const result = await MainDataProviderFunc(phone);

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "User Not Found. First create the user.",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Fetch Successful",
      data: result.findData,
      productData: result.productPayload,
      ProduatTotoalData: result.productData,
      followerList: result.followerList,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong with data provider",
      error: error.message,
    });
  }
};

export default MainDataProvider;
