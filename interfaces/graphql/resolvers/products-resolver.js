import {
  findPaginatedProductsByCategoryId,
  findProductById,
} from "../../../infrastructure/products-repository.js";
import { getRequestedFields } from "../utils.js";

const getPaginatedProducts = async (parent, args, contextValue, info) => {
  const { categoryId, pageNumber, pageSize } = args;
  const requestedFields = getRequestedFields(info);
  return findPaginatedProductsByCategoryId(
    categoryId,
    pageNumber,
    pageSize,
    requestedFields
  );
};

const getProductById = async (parent, args, contextValue, info) => {
  const { id } = args;
  const requestedFields = getRequestedFields(info);
  return findProductById(parseInt(id), requestedFields);
};

const productsResolver = {
  Query: {
    products: getPaginatedProducts,
    product: getProductById,
  },
};

export { productsResolver };
