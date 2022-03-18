import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    required: true,
  },
});

const Order = model("Order", orderSchema, "Orders");
export default Order;
