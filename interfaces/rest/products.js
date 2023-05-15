import { Router } from "express";
import {
  findProductById,
  addNewProduct,
} from "../../infrastructure/products-repository.js";

const productsRouter = Router();

productsRouter.get("/:id", (req, res) => {
  findProductById(parseInt(req.params.id))
    .then((product) => {
      if (!product) res.status(404).send();
      else res.json(product);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

productsRouter.post("/", (req, res) => {
  addNewProduct(req.body)
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

export { productsRouter };
