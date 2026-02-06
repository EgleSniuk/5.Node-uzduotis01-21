import mongoose from "mongoose";

const schema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true }
});

export default mongoose.model("User", schema);