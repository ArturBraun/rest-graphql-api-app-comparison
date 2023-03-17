import { Router } from "express";
import {
  findAllUsers,
  findUserById,
  addNewUser,
} from "../../infrastructure/users-repository.js";

const usersRouter = Router();

usersRouter.get("/:id", (req, res) => {
  findUserById(parseInt(req.params.id))
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(400).send();
    });
});

usersRouter.get("/", (req, res) => {
  findAllUsers()
    .then((users) => res.json(users))
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

export { usersRouter };