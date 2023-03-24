import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findAllCategories = (requiredFields) => {
  const queryObject = {};
  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.category.findMany(queryObject);
};

const addNewCategory = (newCategory) => {
  const createdCategory = dbClient.category.create({
    data: newCategory,
  });
  return createdCategory;
};

export { findAllCategories, addNewCategory };
