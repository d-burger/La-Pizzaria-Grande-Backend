import { Router } from "express";
import { createDish, getAllDishes } from "../controllers/dishes.js";

const dishesRouter = Router();

dishesRouter.route("/").get(getAllDishes).post(createDish);

export default dishesRouter;
