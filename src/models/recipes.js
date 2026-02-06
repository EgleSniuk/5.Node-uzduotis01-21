import mongoose from "mongoose";

const schema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true }
});

export default mongoose.model("Recipe", schema);