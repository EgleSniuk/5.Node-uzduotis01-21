import UserModel from "../models/user.js";
import { v4 as uuid } from "uuid";

// GET ALL
export const getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  return res.json({ users: users });
};

// GET BY ID
export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findOne({ id: id });
  return res.json({ user: user });
};

// INSERT
export const insertUser = async (req, res) => {
  const user = new UserModel({
    id: uuid(),
    ...req.body
  });

  await user.save();
  return res.status(201).json({ user: user });
};

// UPDATE
export const updateUser = async (req, res) => {
  const id = req.params.id;

  const user = await UserModel.findOneAndUpdate(
    { id: id },
    { ...req.body },
    { new: true }
  );

  return res.status(200).json({ user: user });
};

// DELETE
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findOneAndDelete({ id: id });

  if (!user) {
    return res.status(404).json({ message: `No user with id: ${id}` });
  }

  return res.status(200).json({ user: user });
};