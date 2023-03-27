import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "./types/user-type.js";
import { categoryTypeDefs } from "./types/category-type.js";

import { usersResolver } from "./resolvers/users-resolver.js";
import { categoriesResolver } from "./resolvers/categories-resolver.js";

const types = [userTypeDefs, categoryTypeDefs];
const typeDefs = mergeTypeDefs(types);

const individualResolvers = [usersResolver, categoriesResolver];
const resolvers = mergeResolvers(individualResolvers);

export { typeDefs, resolvers };
