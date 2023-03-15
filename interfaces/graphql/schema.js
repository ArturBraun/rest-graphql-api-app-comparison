import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { userTypeDefs } from "./types/user-type.js";
import { usersResolver } from "./resolvers/users-resolver.js";

const types = [userTypeDefs];
const typeDefs = mergeTypeDefs(types);

const individualResolvers = [usersResolver];
const resolvers = mergeResolvers(individualResolvers);

export { typeDefs, resolvers };
