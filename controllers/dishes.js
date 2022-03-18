import asyncHandler from "../middlewares/asyncHandler.js";
import Dish from "../models/Dish.js";

//--------- GET ALL DISHES --------------
export const getAllDishes = asyncHandler(async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

//--------- CREATE DISH -----------------
export const createDish = asyncHandler(async (req, res) => {
  const { body } = req;
  const newDish = await Dish.create(body);
  res.status(201).json(newDish);
});
