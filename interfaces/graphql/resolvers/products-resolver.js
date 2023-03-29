import {
  findPaginatedProducts,
  findProductById,
} from "../../../infrastructure/products-repository.js";
import { getRequestedFields } from "../utils.js";

const getPaginatedProducts = async (parent, args, contextValue, info) => {
  const { pageNumber, pageSize } = args;
  const requestedFields = getRequestedFields(info, "Product");
  return findPaginatedProducts(pageNumber, pageSize, requestedFields);
};

const getProductById = async (parent, args, contextValue, info) => {
  const { id } = args;
  const requestedFields = getRequestedFields(info, "Product");
  return findProductById(parseInt(id), requestedFields);
};

const productsResolver = {
  Query: {
    products: getPaginatedProducts,
    product: getProductById,
  },
};

export { productsResolver };
