import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findUserById = (id, requiredFields) => {
  const queryObject = {
    where: {
      userId: id,
    },
  };
  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.user.findUnique(queryObject);
};

const findAllUsers = (requiredFields) => {
  const queryObject = {};
  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.user.findMany(queryObject);
};

const addNewUser = (newUser) => {
  const createdUser = dbClient.user.create({
    data: newUser,
  });
  return createdUser;
};

export { findUserById, findAllUsers, addNewUser };
