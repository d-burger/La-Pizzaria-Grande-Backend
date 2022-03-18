import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/Order.js";

//--------- GET ALL ORDERS --------------
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

//--------- CREATE ORDER -----------------
export const createOrder = asyncHandler(async (req, res) => {
  const { body } = req;
  const newOrder = await Order.create(body);
  res.status(201).json(newOrder);
});

//--------- DELETE ORDER -----------------
