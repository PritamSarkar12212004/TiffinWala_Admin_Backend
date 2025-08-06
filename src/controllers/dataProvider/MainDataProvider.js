import adminModel from "../../models/adminModel.js";
import ProductModel from "../../models/productModel.js";
const MainDataProvider = async (req, res) => {
  try {
    const { phone } = req.body;
    const findData = await adminModel.findOne({ User_Phone_Number: phone });
    if (findData) {
      const AdminFollowers = await findData.User_Followers.length;
      const AdminProducts = await findData.User_Post_Count.length;

      const productData = await ProductModel.find({
        postVendorId: findData._id,
      });
      const productsWithLikes = await Promise.all(
        productData.map(async (product) => {
          const totalLikes = product.productLikes.length;
          return {
            ...product._doc,
            totalLikes,
            productLikes: product.productLikes,
          };
        })
      );

      // Calculate total likes across all products
      const totalLikesCount = await productsWithLikes.reduce(
        (sum, product) => sum + product.totalLikes,
        0
      );

      const totalViewsCount = productData.reduce(
        (sum, product) => sum + (product.postTotalViews || 0),
        0
      );

      const productPayload = {
        ProductTotalLike: totalLikesCount,
        ProductTotalViews: totalViewsCount,
        productData: productData.length > 0 ? productData : null,
        AdminFollowers: AdminFollowers,
        AdminProducts: AdminProducts,
      };

      res.status(200).json({
        success: true,
        message: "Data Fetch successFull",
        data: findData,
        productData: productPayload,
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
