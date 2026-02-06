import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";

// SIGN UP (create user)
export const createNewUser = async (req, res) => {
  const data = req.body;

  // Hash password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(data.password, salt);

  const user = new UserModel({
    id: uuid(),
    name: data.name,
    email: data.email,
    password: hash,
    age: data.age,
    location: data.location
  });

  await user.save();

  return res.status(201).json({ user });
};

// LOGIN (GET su body – kaip darė dėstytojas)
export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Surandam user pagal email
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Bad email" });
  }

  // Tikrinam slaptažodį
  const isPasswordMatch = bcrypt.compareSync(password, user.password);

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Bad password" });
  }

  // Generuojam JWT
  const token = jwt.sign(
    { email: user.email, userId: user.id },
    process.env.JWT_RANDOMISER,
    { expiresIn: "12h" }
  );

  return res.status(200).json({ jwt: token });
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  return res.json({ users });
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findOne({ id });
  return res.json({ user });
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const id = req.params.id;

  const user = await UserModel.findOneAndUpdate(
    { id },
    { ...req.body },
    { new: true }
  );

  return res.json({ user });
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await UserModel.findOneAndDelete({ id });

  if (!user) {
    return res.status(404).json({ message: `No user with id: ${id}` });
  }

  return res.json({ user });
};