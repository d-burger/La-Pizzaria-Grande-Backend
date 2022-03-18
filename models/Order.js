import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
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

const Order = model("Order", orderSchema, "Orders");
export default Order;
