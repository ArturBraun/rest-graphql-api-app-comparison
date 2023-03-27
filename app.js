import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import bodyParser from "body-parser";
import express from "express";

import { typeDefs, resolvers } from "./interfaces/graphql/schema.js";
import { usersRouter } from "./interfaces/rest/users.js";
import { categoriesRouter } from "./interfaces/rest/categories.js";
import { productsRouter } from "./interfaces/rest/products.js";
import { ordersRouter } from "./interfaces/rest/orders.js";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

// Graphql API
app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

// Rest API
app.use(express.json());
app.use("/rest/users", usersRouter);
app.use("/rest/categories", categoriesRouter);
app.use("/rest/products", productsRouter);
app.use("/rest/orders", ordersRouter);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready`);
