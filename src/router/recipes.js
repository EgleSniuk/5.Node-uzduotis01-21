import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  insertRecipe,
  updateRecipe,
  deleteRecipe,
  getRandomRecipe,
  getRecipesByIngredient
} from "../controller/recipes.js";

const router = express.Router();

// REST API
router.get("/recipes", getAllRecipes);
router.get("/recipes/random", getRandomRecipe);
router.get("/recipes/ingredient/:name", getRecipesByIngredient);
router.get("/recipes/:id", getRecipeById);
router.post("/recipes", insertRecipe);
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);

export default router;
