import { Router } from "express";
import {
  findUserById,
  addNewUser,
} from "../../infrastructure/users-repository.js";
import { findUserOrdersWithDetails } from "../../infrastructure/orders-repository.js";

const usersRouter = Router();

usersRouter.get("/:id", (req, res) => {
  findUserById(parseInt(req.params.id))
    .then((user) => {
      if (!user) res.status(404).send();
      else res.json(user);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

usersRouter.post("/", (req, res) => {
  addNewUser(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

usersRouter.get("/:id/orders", (req, res) => {
  findUserOrdersWithDetails(parseInt(req.params.id))
    .then((orders) => {
      if (!orders) res.status(404).send();
      else res.json(orders);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

export { usersRouter };
