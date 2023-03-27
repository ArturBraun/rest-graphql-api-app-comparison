import { findAllCategories } from "../../../infrastructure/categories-repository.js";

const getAllCategories = async (parent, args, contextValue, info) =>
  findAllCategories();

const categoriesResolver = {
  Query: {
    categories: getAllCategories,
  },
};

export { categoriesResolver };
