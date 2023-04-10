import { dbClient } from "./database/db-client.js";
import lodash from "lodash";
import { getRequestedFieldsSelectObject } from "./utils.js";

const findOrderById = (id, requiredFields) => {
  const queryObject = {
    where: {
      orderId: id,
    },
  };

  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.order.findUnique(queryObject);
};

const findUserOrders = (userId, requiredFields) => {
  const queryObject = {
    where: {
      userId: userId,
    },
  };

  if (requiredFields) {
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.order.findMany(queryObject);
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
