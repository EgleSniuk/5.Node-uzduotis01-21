import RecipeModel from "../models/recipes.js";
import { v4 as uuid } from "uuid";

// GET ALL
export const getAllRecipes = async (req, res) => {
  const recipes = await RecipeModel.find();
  return res.json({ recipes: recipes });
};

// GET BY ID
export const getRecipeById = async (req, res) => {
  const id = req.params.id;
  const recipe = await RecipeModel.findOne({ id: id });
  return res.json({ recipe: recipe });
};

// INSERT
export const insertRecipe = async (req, res) => {
  const recipe = new RecipeModel({
    id: uuid(),
    ...req.body
  });

  await recipe.save();
  return res.status(201).json({ recipe: recipe });
};

// UPDATE
export const updateRecipe = async (req, res) => {
  const id = req.params.id;

  const recipe = await RecipeModel.findOneAndUpdate(
    { id: id },
    { ...req.body },
    { new: true }
  );

  return res.status(200).json({ recipe: recipe });
};

// DELETE
export const deleteRecipe = async (req, res) => {
  const id = req.params.id;
  const recipe = await RecipeModel.findOneAndDelete({ id: id });

  if (!recipe) {
    return res.status(404).json({ message: `No recipe with id: ${id}` });
  }

  return res.status(200).json({ recipe: recipe });
};

// RANDOM
export const getRandomRecipe = async (req, res) => {
  const recipes = await RecipeModel.find();
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  return res.json({ recipe: random });
};

// FILTER BY INGREDIENT
export const getAllRecipesWithIngredient = async (req, res) => {
  const ingredient = req.params.ingredient;

  const recipes = await RecipeModel.find({
    ingredients: { $regex: ingredient, $options: "i" }
  });

  return res.json({ recipes: recipes });
};