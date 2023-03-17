import { dbClient } from "./database/db-client.js";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

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
