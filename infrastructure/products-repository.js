import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findProductById = (id) =>
  dbClient.product.findUnique({
    where: {
      productId: id,
    },
  });

const findPaginatedProducts = (requiredFields, pageNumber, pageSize) => {
  const queryObject = {};
  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }
  if (pageNumber && pageSize) {
    queryObject.skip = pageNumber * pageSize;
    queryObject.take = pageSize;
  }

  return dbClient.product.findMany(queryObject);
};

const addNewProduct = (newProduct) => {
  const createdProduct = dbClient.product.create({
    data: newProduct,
  });
  return createdProduct;
};

export { findProductById, findPaginatedProducts, addNewProduct };
