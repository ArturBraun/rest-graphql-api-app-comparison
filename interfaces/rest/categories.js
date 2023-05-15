import { Router } from "express";
import {
  findAllCategories,
  addNewCategory,
} from "../../infrastructure/categories-repository.js";
import { findPaginatedProductsByCategoryId } from "../../infrastructure/products-repository.js";

const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
  findAllCategories()
    .then((categories) => res.json(categories))
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

categoriesRouter.get("/:id/products", (req, res) => {
  findPaginatedProductsByCategoryId(
    parseInt(req.params.id),
    parseInt(req.query.pageNumber),
    parseInt(req.query.pageSize)
  )
    .then((products) => res.json(products))
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

categoriesRouter.post("/", (req, res) => {
  addNewCategory(req.body)
    .then((category) => {
      res.json(category);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

export { categoriesRouter };
