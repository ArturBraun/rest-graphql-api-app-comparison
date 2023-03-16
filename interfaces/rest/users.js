import { Router } from "express";
import {
  findAllUsers,
  findUserById,
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

export { usersRouter };
