import { Router } from "express";
import { findOrderById } from "../../infrastructure/orders-repository.js";
import { placeOrder } from "../../domain/order-service.js";

const ordersRouter = Router();

ordersRouter.get("/:id", (req, res) => {
  findOrderById(parseInt(req.params.id))
    .then((order) => {
      if (!order) res.status(404).send();
      else res.json(order);
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
      res.status(400).send({ error: error.message });
    });
});

export { ordersRouter };
