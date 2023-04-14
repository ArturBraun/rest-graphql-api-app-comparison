import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "./types/user-type.js";
import { categoryTypeDefs } from "./types/category-type.js";
import { productTypeDefs } from "./types/product-type.js";
import { orderTypeDefs } from "./types/orders-type.js";
import { recommendedProductTypeDefs } from "./types/recommended-product-type.js";

import { usersResolver } from "./resolvers/users-resolver.js";
import { categoriesResolver } from "./resolvers/categories-resolver.js";
import { productsResolver } from "./resolvers/products-resolver.js";
import { ordersResolver } from "./resolvers/orders-resolver.js";
import { recommendedProductsResolver } from "./resolvers/recommended-products-resolver.js";

const types = [
  userTypeDefs,
  categoryTypeDefs,
  productTypeDefs,
  orderTypeDefs,
  recommendedProductTypeDefs,
];
const typeDefs = mergeTypeDefs(types);

const individualResolvers = [
  usersResolver,
  categoriesResolver,
  productsResolver,
  ordersResolver,
  recommendedProductsResolver,
];
const resolvers = mergeResolvers(individualResolvers);

export { typeDefs, resolvers };
