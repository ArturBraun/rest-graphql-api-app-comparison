import { Router } from "express";
import {
  findRecommendedProducts,
  addNewRecommendedProduct,
} from "../../infrastructure/recommended-products-repository.js";

const recommendedProductsRouter = Router();

recommendedProductsRouter.get("/", (req, res) => {
  if (!req.query.limit) {
    res.status(400).send();
  } else {
    findRecommendedProducts(parseInt(req.query.limit))
      .then((recommendedProducts) => res.json(recommendedProducts))
      .catch((error) => {
        console.error(error.message);
        res.status(400).send();
      });
  }
});

recommendedProductsRouter.post("/", (req, res) => {
  addNewRecommendedProduct(req.body)
    .then((recommendedProduct) => {
      res.json(recommendedProduct);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

export { recommendedProductsRouter };
