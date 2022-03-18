import mongoose from "mongoose";
const { Schema, model } = mongoose;

const dishSchema = new Schema({
  dish_name: {
    type: String,
    required: true,
  },
  dish_price: {
    type: String,
    required: true,
  },
  dish_category: {
    type: String,
    required: true,
  },
});

const Dish = model("Dish", dishSchema, "Dishes");
export default Dish;
