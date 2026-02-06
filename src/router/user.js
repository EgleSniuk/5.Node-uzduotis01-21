import express from "express";
import {
  getAllUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUser
} from "../controller/user.js";

const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);
router.post("/insertUser", insertUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;