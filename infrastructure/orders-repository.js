import { dbClient } from "./database/db-client.js";

const findOrderById = (id) =>
  dbClient.order.findUnique({
    where: {
      orderId: id,
    },
  });

const findUserOrders = (userId) => {
  return dbClient.order.findMany({
    where: {
      userId: userId,
    },
  });
};

const addNewOrder = (newOrder) => {
  const createdOrder = dbClient.order.create({
    data: newOrder,
  });
  return createdOrder;
};

export { findOrderById, findUserOrders, addNewOrder };
