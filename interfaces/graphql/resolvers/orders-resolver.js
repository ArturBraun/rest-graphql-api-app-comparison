import {
  findOrderById,
  findUserOrders,
  addNewOrder,
} from "../../../infrastructure/orders-repository.js";
import { getRequestedFields } from "../utils.js";

const getOrder = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "Order");
  return findOrderById(args.orderId, requestedFields);
};

const getUserOrders = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info, "Order");
  return findUserOrders(args.userId, requestedFields);
};

const ordersResolver = {
  Query: {
    order: getOrder,
    userOrders: getUserOrders,
  },
};

export { ordersResolver };
