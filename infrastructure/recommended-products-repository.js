import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findRecommendedProducts = (maxProductsNumber, requiredFields) => {
  const queryObject = {
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    take: maxProductsNumber,
  };

  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.recommendedProduct.findMany(queryObject);
};

const addNewRecommendedProduct = (newRecommendedProduct) => {
  const createdRecommendedProduct = dbClient.recommendedProduct.create({
    data: newRecommendedProduct,
  });
  return createdRecommendedProduct;
};

export { findRecommendedProducts, addNewRecommendedProduct };
