import { dbClient } from "./database/db-client.js";

const deleteAllData = async () => {
  await Promise.all([
    dbClient.recommendedProduct.deleteMany({}),
    dbClient.orderPosition.deleteMany({}),
    dbClient.category.deleteMany({}),
  ]);

  await dbClient.order.deleteMany({});

  return Promise.all([
    dbClient.product.deleteMany({}),
    dbClient.user.deleteMany({}),
  ]);
};

const countAllData = async () => {
  return Promise.allSettled([
    dbClient.recommendedProduct.count(),
    dbClient.orderPosition.count(),
    dbClient.order.count(),
    dbClient.category.count(),
    dbClient.product.count(),
    dbClient.user.count(),
  ]).then((results) => {
    return {
      recommendedProducts: results[0].value,
      orderPositions: results[1].value,
      orders: results[2].value,
      categories: results[3].value,
      products: results[4].value,
      users: results[5].value,
    };
  });
};

export { deleteAllData, countAllData };
