import { addNewOrder } from "../infrastructure/orders-repository.js";
import { findProductsByIds } from "../infrastructure/products-repository.js";

const placeOrder = (orderRequest) => {
  const orderedProductsInfo = findProductsByIds(
    orderRequest.orderPositions.map((orderPosition) => orderPosition.productId)
  );
  const orderedProductsInfoMap = new Map(
    orderedProductsInfo.map((p) => [p.id, p])
  );
  let totalPrice = 0;
  const orderDao = {
    userId: orderRequest.userId,
    deliveryMethod: orderRequest.deliveryMethod,
    paymentMethod: orderRequest.paymentMethod,
    address: orderRequest.address,
    orderPositions: [],
  };

  for (const orderPosition of orderRequest.orderPositions) {
    const productInfo = orderedProductsInfoMap.get(orderPosition.productId);
    totalPrice += productInfo.price * orderPosition.quantity;

    orderDao.orderPositions.push({
      productId: orderPosition.productId,
      quantity: orderPosition.quantity,
      price: productInfo.price,
    });
  }

  orderDao.totalPrice = totalPrice;
  return addNewOrder(orderDao);
};
