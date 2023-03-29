import {
  findUserById,
  findAllUsers,
} from "../../../infrastructure/users-repository.js";
import { getRequestedFields } from "../utils.js";

const getUserById = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "User");
  return findUserById(parseInt(args.id), requestedFields);
};

const getAllUsers = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "User");
  return findAllUsers(requestedFields);
};

const usersResolver = {
  Query: {
    users: getAllUsers,
    user: getUserById,
  },
};

export { usersResolver };
