import { Router } from "express";
import {
  findAllCategories,
  addNewCategory,
} from "../../infrastructure/categories-repository.js";

const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
  findAllCategories()
    .then((categories) => res.json(categories))
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
