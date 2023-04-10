import {
  findOrderById,
  findUserOrders,
  addNewOrder,
} from "../../../infrastructure/orders-repository.js";
import { getRequestedFields } from "../utils.js";

const getOrder = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info);
  return findOrderById(parseInt(args.orderId), requestedFields);
};

const getUserOrders = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info);
  return findUserOrders(parseInt(args.userId), requestedFields);
};

const ordersResolver = {
  Query: {
    order: getOrder,
    userOrders: getUserOrders,
  },
};

export { ordersResolver };
