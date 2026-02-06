// 1. Sukurti nuo pradžių node.js projektą naudojant express framework;
 
// 2. Sukurti endpointus:
 
// /getAllRecipies
// /getRecipesById
// /insertRecipies
// /updateRecipie
// /deleteRecipie
// /getRandomRecepie
// /getAllRecepiesWithIngridient
 
// 3. Applikacija turi būt pajungta prie mongoDB
 
// 4.
// Dadėt user modelius
// Dadėt user router
// Dadėt user controller
// Pridėt ADD_USER ir GET_USER_BY_ID controllerius ir endpointus

import express from "express";
import recipesRouter from "./src/router/recipes.js";

import mongoose from "mongoose";
import "dotenv/config";

import userRouter from "./src/router/user.js";

const app = express();

app.use(express.json());
app.use(recipesRouter);
app.use(userRouter);

mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("DB connection error:", err));

app.get("/", (req, res) => {
  res.send("Serveris veikia ir prijungtas prie MongoDB!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
