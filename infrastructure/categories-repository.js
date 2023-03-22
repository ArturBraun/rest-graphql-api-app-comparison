import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findAllCategories = (requiredFields) => {
  const queryObject = {};
  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.user.findMany(queryObject);
};

const addNewCategory = (newCategory) => {
  const createdCategory = dbClient.user.create({
    data: newCategory,
  });
  return createdCategory;
};

export { findAllCategories, addNewCategory };
