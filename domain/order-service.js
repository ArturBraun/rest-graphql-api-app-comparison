import { addNewOrder } from "../infrastructure/orders-repository.js";
import { findProductsByIds } from "../infrastructure/products-repository.js";

const placeOrder = async (orderRequest, requiredFields) => {
  const orderedProductsInfo = await findProductsByIds(
    orderRequest.orderPositions.map((orderPosition) => orderPosition.productId)
  );
  if (orderedProductsInfo.length !== orderRequest.orderPositions.length) {
    throw new Error("Order contains incorrect product ids!");
  }
  const orderedProductsInfoMap = new Map(
    orderedProductsInfo.map((p) => [p.productId, p])
  );
  let totalPrice = 0;
  const orderData = {
    userId: orderRequest.userId,
    deliveryMethod: orderRequest.deliveryMethod,
    paymentMethod: orderRequest.paymentMethod,
    address: orderRequest.address,
    postalCode: orderRequest.postalCode,
    city: orderRequest.city,
    country: orderRequest.country,
    phone: orderRequest.phone,
    orderPositions: [],
  };

  for (const orderPosition of orderRequest.orderPositions) {
    const productInfo = orderedProductsInfoMap.get(orderPosition.productId);
    totalPrice += productInfo.price * orderPosition.quantity;

    orderData.orderPositions.push({
      productId: orderPosition.productId,
      quantity: orderPosition.quantity,
      price: productInfo.price,
    });
  }

  orderData.totalPrice = totalPrice;
  return addNewOrder(orderData, requiredFields);
};

export { placeOrder };
