import {
  findUserById,
  findAllUsers,
  addNewUser,
} from "../../../infrastructure/users-repository.js";
import { getRequestedFields } from "../utils.js";

const getUserById = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info);
  return findUserById(parseInt(args.id), requestedFields);
};

const getAllUsers = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info);
  return findAllUsers(requestedFields);
};

const createNewUser = async (parent, args, contextValue, info) => {
  const { newUser } = args;
  const requestedFields = getRequestedFields(info);
  return addNewUser(newUser, requestedFields);
};

const usersResolver = {
  Query: {
    users: getAllUsers,
    user: getUserById,
  },
  Mutation: {
    createNewUser: createNewUser,
  },
};

export { usersResolver };
