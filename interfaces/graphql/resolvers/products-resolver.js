import {
  findPaginatedProducts,
  findProductById,
} from "../../../infrastructure/products-repository.js";

const getPaginatedProducts = async (parent, args, contextValue, info) => {
  const { pageNumber, pageSize } = args;
  return findPaginatedProducts(null, pageNumber, pageSize);
};

const getProductById = async (parent, args, contextValue, info) => {
  const { id } = args;
  return findProductById(parseInt(id));
};

const productsResolver = {
  Query: {
    products: getPaginatedProducts,
    product: getProductById,
  },
};

export { productsResolver };
