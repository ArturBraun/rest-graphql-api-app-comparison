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

const findUserOrdersWithDetails = (userId, requiredFields) => {
  const queryObject = {
    where: {
      userId: userId,
    },
    include: {
      orderPositions: {
        include: {
          product: true,
        },
      },
    },
  };

  if (requiredFields) {
    delete queryObject.include;
    queryObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.order.findMany(queryObject);
};

const addNewOrder = (newOrder, requiredFields) => {
  const orderDao = lodash.cloneDeep(newOrder);
  delete orderDao.orderPositions;
  orderDao.orderPositions = {
    create: newOrder.orderPositions,
  };

  const createObject = {
    data: orderDao,
  };
  if (requiredFields) {
    createObject.select = getRequestedFieldsSelectObject(requiredFields);
  }

  return dbClient.order.create(createObject);
};

export {
  findOrderById,
  findUserOrders,
  addNewOrder,
  findUserOrdersWithDetails,
};
