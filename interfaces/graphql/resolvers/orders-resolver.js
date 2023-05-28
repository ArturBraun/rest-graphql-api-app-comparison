import {
  findOrderById,
  findUserOrders,
  findUserOrdersWithDetails,
} from "../../../infrastructure/orders-repository.js";
import { placeOrder } from "../../../domain/order-service.js";
import { getRequestedFields } from "../utils.js";

const getOrder = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info);
  return findOrderById(parseInt(args.orderId), requestedFields);
};

const getUserOrders = async (parent, args, contextValue, info) => {
  const requestedFields = getRequestedFields(info);
  return findUserOrdersWithDetails(parseInt(args.userId), requestedFields);
};

const placeNewOrder = async (parent, args, contextValue, info) => {
  const { order } = args;
  const requestedFields = getRequestedFields(info);
  return placeOrder(order, requestedFields);
};

const ordersResolver = {
  Query: {
    order: getOrder,
    userOrders: getUserOrders,
  },
  Mutation: {
    placeOrder: placeNewOrder,
  },
};

export { ordersResolver };
