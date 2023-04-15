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

const generateNewProductData = (id, numOfCategories) => {
  return {
    name: `Product ${id} name`,
    description: `Product ${id} detailed description`,
    price: 100 + getRandomInt(10000),
    categoryId: id % numOfCategories,
  };
};

const generateNewRecommendedProductData = (id, numOfProducts) => {
  return {
    productId: numOfProducts - id,
  };
};

const createTestData = async (numOfRecordsOfEntities) => {
  const categoriesPromises = [];
  for (let i = 1; i <= numOfRecordsOfEntities.categories; i++) {
    categoriesPromises.push(addNewCategory(generateNewCategoryData(i)));
  }
  const categories = await Promise.all(categoriesPromises);
  const minCategoryId = categories[0].categoryId;

  const productsPromises = [];
  for (
    let i = minCategoryId;
    i <= minCategoryId + numOfRecordsOfEntities.products;
    i++
  ) {
    productsPromises.push(
      addNewProduct(
        generateNewProductData(i, numOfRecordsOfEntities.categories)
      )
    );
  }
  const products = await Promise.all(productsPromises);
  const minProductId = products[0].productId;

  const promises = [];
  for (
    let i = minProductId;
    i <= minProductId + numOfRecordsOfEntities.recommendedProducts;
    i++
  ) {
    promises.push(
      addNewRecommendedProduct(
        generateNewRecommendedProductData(i, numOfRecordsOfEntities.products)
      )
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
