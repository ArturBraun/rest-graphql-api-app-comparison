import { dbClient } from "./database/db-client.js";

const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

const findAllUsers = () => dbClient.user.findMany();

const addNewUser = (newUser) => {
  const createdUser = dbClient.user.create({
    data: newUser,
  });
  return createdUser;
};

export { findUserById, findAllUsers, addNewUser };
