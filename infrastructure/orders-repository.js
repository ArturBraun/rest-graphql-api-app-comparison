import { dbClient } from "./database/db-client.js";
import lodash from "lodash";

const findOrderById = (id) =>
  dbClient.order.findUnique({
    where: {
      orderId: id,
    },
    include: { orderPositions: true },
  });

const findUserOrders = (userId) => {
  return dbClient.order.findMany({
    where: {
      userId: userId,
    },
    include: { orderPositions: true },
  });
};

const addNewOrder = (newOrder) => {
  const orderDao = lodash.cloneDeep(newOrder);
  delete orderDao.orderPositions;
  orderDao.orderPositions = {
    create: newOrder.orderPositions,
  };
  const createdOrder = dbClient.order.create({
    data: orderDao,
  });
  return createdOrder;
};

export { findOrderById, findUserOrders, addNewOrder };
