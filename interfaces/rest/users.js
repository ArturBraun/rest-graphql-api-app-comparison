import { Router } from "express";
import {
  findAllUsers,
  findUserById,
  addNewUser,
} from "../../infrastructure/users-repository.js";

const usersRouter = Router();

usersRouter.get("/:id", (req, res) => {
  const user = findUserById(parseInt(req.params.id));
  res.json(user);
});

usersRouter.get("/", (req, res) => {
  const users = findAllUsers();
  res.json(users);
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
