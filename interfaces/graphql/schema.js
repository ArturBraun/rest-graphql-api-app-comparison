import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { bookTypeDefs } from "./types/book-type.js";
import { booksResolver } from "./resolvers/books-resolver.js";

const types = [bookTypeDefs];
const typeDefs = mergeTypeDefs(types);

const individualResolvers = [booksResolver];
const resolvers = mergeResolvers(individualResolvers);

export { typeDefs, resolvers };
