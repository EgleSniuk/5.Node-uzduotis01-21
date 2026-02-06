import express from "express";
import {
  createNewUser,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controller/user.js";

const router = express.Router();

// SIGN UP
router.post("/users", createNewUser);

// LOGIN (dėstytojo variantas – GET su body)
router.get("/login", login);

// CRUD
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;