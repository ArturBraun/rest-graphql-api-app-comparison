import { Router } from "express";
import { findOrderById } from "../../infrastructure/orders-repository.js";
import { placeOrder } from "../../domain/order-service.js";

const ordersRouter = Router();

ordersRouter.get("/:id", (req, res) => {
  findOrderById(parseInt(req.params.id))
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

ordersRouter.post("/", (req, res) => {
  placeOrder(req.body)
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

export { ordersRouter };
