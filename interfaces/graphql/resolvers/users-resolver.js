import {
  findUserById,
  findAllUsers,
} from "../../../infrastructure/users-repository.js";
import { getRequestedFields } from "../utils.js";

const getUserById = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "User");
  // console.log(JSON.stringify(requestedFields));
  return findUserById(parseInt(args.id));
};

const getAllUsers = () => findAllUsers().then((users) => users);

const usersResolver = {
  Query: {
    users: getAllUsers,
    user: getUserById,
  },
};

export { usersResolver };
