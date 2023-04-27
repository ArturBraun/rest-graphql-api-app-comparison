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

const addNewUser = (newUser, requiredFields) => {
  const newUserData = {
    data: newUser,
  };
  if (requiredFields) {
    newUserData.select = getRequestedFieldsSelectObject(requiredFields);
  }

  const createdUser = dbClient.user.create(newUserData);
  return createdUser;
};

export { findUserById, findAllUsers, addNewUser };
