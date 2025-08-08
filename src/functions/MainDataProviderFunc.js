import adminModel from "../models/adminModel.js";
import ProductModel from "../models/productModel.js";
const MainDataProviderFunc = async (phone) => {
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
    return {
      findData,
      productPayload,
      productData,
    };
  } else {
    return null;
  }
};
export default MainDataProviderFunc;
