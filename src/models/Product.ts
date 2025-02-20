import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  stock: Number,
  image: String,
  description: String,
});

export const Product = models.Product || model("Product", ProductSchema);