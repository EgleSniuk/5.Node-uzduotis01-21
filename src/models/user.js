import mongoose from "mongoose";

const schema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },   // ← PRIDĖTI
  password: { type: String, required: true }, // ← PRIDĖTI
  age: { type: Number, required: true },
  location: { type: String, required: true }
});

export default mongoose.model("User", schema);