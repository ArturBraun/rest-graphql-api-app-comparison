import { Router } from "express";
import {
  countAllData,
  deleteAllData,
} from "../../infrastructure/test-data-repository.js";
import { addNewCategory } from "../../infrastructure/categories-repository.js";
import { addNewProduct } from "../../infrastructure/products-repository.js";
import { addNewRecommendedProduct } from "../../infrastructure/recommended-products-repository.js";
import { addNewUser } from "../../infrastructure/users-repository.js";

const testDataRouter = Router();

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const generateNewUserData = (id) => {
  return {
    email: `user-email-${id}@gmail.com`,
    firstName: `UserFirstName${id}`,
    lastName: `UserLastName${id}`,
    dateOfBirth: `${id % 28}-${id % 12}-${1965 + (id % 35)}`,
    gender: id % 2 == 0 ? "M" : "W",
  };
};

const generateNewCategoryData = (id) => {
  return {
    name: `Category ${id}`,
  };
};

const generateNewProductData = (minCategoryId, id, numOfCategories) => {
  return {
    name: `Product ${id} name`,
    description: `Product ${id} detailed description`,
    price: 100 + getRandomInt(10000),
    categoryId: minCategoryId + (id % numOfCategories),
  };
};

const generateNewRecommendedProductData = (id) => {
  return {
    productId: id,
  };
};

const createTestData = async (numOfRecordsOfEntities) => {
  const countedExistingData = await countAllData();

  const categoriesPromises = [];
  for (let i = 1; i <= numOfRecordsOfEntities.categories; i++) {
    categoriesPromises.push(
      addNewCategory(
        generateNewCategoryData(countedExistingData.categories + i)
      )
    );
  }
  const categories = await Promise.all(categoriesPromises);
  const minCategoryId = Math.min(
    ...categories.map((category) => category.categoryId)
  );

  const productsPromises = [];
  for (let i = 1; i <= numOfRecordsOfEntities.products; i++) {
    const product = generateNewProductData(
      minCategoryId,
      countedExistingData.products + i,
      numOfRecordsOfEntities.categories
    );
    productsPromises.push(addNewProduct(product));
  }
  const products = await Promise.all(productsPromises);
  const maxProductId = Math.max(
    ...products.map((product) => product.productId)
  );

  const promises = [];
  for (
    let i = maxProductId;
    i > maxProductId - numOfRecordsOfEntities.recommendedProducts;
    i--
  ) {
    promises.push(
      addNewRecommendedProduct(generateNewRecommendedProductData(i))
    );
  }

  for (let i = 1; i <= numOfRecordsOfEntities.users; i++) {
    promises.push(addNewUser(generateNewUserData(i)));
  }

  return Promise.all(promises);
};

testDataRouter.get("/count", (req, res) => {
  countAllData()
    .then((dataCount) => {
      res.json(dataCount);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

testDataRouter.post("/", (req, res) => {
  createTestData(req.body)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

testDataRouter.delete("/", (req, res) => {
  deleteAllData()
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

export { testDataRouter };
