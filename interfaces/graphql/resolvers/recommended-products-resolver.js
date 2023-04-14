import { findRecommendedProducts } from "../../../infrastructure/recommended-products-repository.js";
import { getRequestedFields } from "../utils.js";

const getRecommendedProducts = async (parent, args, contextValue, info) => {
  const { limit } = args;
  const requestedFields = getRequestedFields(info);

  return findRecommendedProducts(limit, requestedFields);
};

const recommendedProductsResolver = {
  Query: {
    recommendedProducts: getRecommendedProducts,
  },
};

export { recommendedProductsResolver };
