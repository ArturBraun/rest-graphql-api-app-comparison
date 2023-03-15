import { users } from "../../../infrastructure/users-repository.js";
import { getRequestedFields } from "../utils.js";

const getUserById = (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "User");
  console.log(JSON.stringify(requestedFields));
  return users.find((user) => user.id === parseInt(args.id));
};

const usersResolver = {
  Query: {
    users: () => users,
    user: getUserById,
  },
};

export { usersResolver };
