import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findProductById = (id, requiredFields) => {
  const queryObject = {
    where: {
      productId: id,
    },
  };
  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.product.findUnique(queryObject);
};

const findPaginatedProductsByCategoryId = (
  categoryId,
  pageNumber,
  pageSize,
  requiredFields
) => {
  const queryObject = {
    where: {
      categoryId: categoryId,
    },
  };
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

const findProductsByIds = (ids) => {
  return dbClient.product.findMany({
    where: {
      productId: {
        in: ids,
      },
    },
  });
};

export {
  findProductById,
  findPaginatedProductsByCategoryId,
  addNewProduct,
  findProductsByIds,
};
