import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/orders.js";

const ordersRouter = Router();

ordersRouter.route("/").get(getAllOrders).post(createOrder);

export default ordersRouter;
