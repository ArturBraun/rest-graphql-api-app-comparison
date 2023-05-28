import { dbClient } from "./database/db-client.js";

const deleteAllData = async () => {
  await Promise.all([
    dbClient.recommendedProduct.deleteMany({}),
    dbClient.orderPosition.deleteMany({}),
  ]);

  await dbClient.order.deleteMany({});

  await Promise.all([
    dbClient.product.deleteMany({}),
    dbClient.user.deleteMany({}),
  ]);

  return dbClient.category.deleteMany({});
};

const countAllData = async () => {
  const recommendedProductAggregate = dbClient.recommendedProduct.aggregate({
    _count: {
      _all: true,
    },
    _min: {
      recommendedProductId: true,
    },
    _max: {
      recommendedProductId: true,
    },
  });

  const orderPositionAggregate = dbClient.orderPosition.aggregate({
    _count: {
      _all: true,
    },
    _min: {
      orderPositionId: true,
    },
    _max: {
      orderPositionId: true,
    },
  });

  const orderAggregate = dbClient.order.aggregate({
    _count: {
      _all: true,
    },
    _min: {
      orderId: true,
    },
    _max: {
      orderId: true,
    },
  });

  const categoryAggregate = dbClient.category.aggregate({
    _count: {
      _all: true,
    },
    _min: {
      categoryId: true,
    },
    _max: {
      categoryId: true,
    },
  });

  const productAggregate = dbClient.product.aggregate({
    _count: {
      _all: true,
    },
    _min: {
      productId: true,
    },
    _max: {
      productId: true,
    },
  });

  const userAggregate = dbClient.user.aggregate({
    _count: {
      _all: true,
    },
    _min: {
      userId: true,
    },
    _max: {
      userId: true,
    },
  });

  return Promise.allSettled([
    recommendedProductAggregate,
    orderPositionAggregate,
    orderAggregate,
    categoryAggregate,
    productAggregate,
    userAggregate,
  ]).then((results) => {
    return {
      recommendedProducts: results[0],
      orderPositions: results[1],
      orders: results[2],
      categories: results[3],
      products: results[4],
      users: results[5],
    };
  });
};

export { deleteAllData, countAllData };
