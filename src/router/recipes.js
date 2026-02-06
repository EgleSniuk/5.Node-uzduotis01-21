import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  insertRecipe,
  updateRecipe,
  deleteRecipe,
  getRandomRecipe,
  getAllRecipesWithIngredient
} from "../controller/recipes.js";

const router = express.Router();

router.get("/getAllRecipies", getAllRecipes);
router.get("/getRecipesById/:id", getRecipeById);
router.post("/insertRecipies", insertRecipe);
router.put("/updateRecipie/:id", updateRecipe);
router.delete("/deleteRecipie/:id", deleteRecipe);
router.get("/getRandomRecepie", getRandomRecipe);
router.get("/getAllRecepiesWithIngridient/:ingredient", getAllRecipesWithIngredient);

export default router;
