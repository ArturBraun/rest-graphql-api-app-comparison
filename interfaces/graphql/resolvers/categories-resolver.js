import { findAllCategories } from "../../../infrastructure/categories-repository.js";
import { getRequestedFields } from "../utils.js";

const getAllCategories = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "Category");
  return findAllCategories(requestedFields);
};

const categoriesResolver = {
  Query: {
    categories: getAllCategories,
  },
};

export { categoriesResolver };
