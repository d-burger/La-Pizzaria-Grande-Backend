//-------------- IMPORT ----------------------
import "dotenv/config.js";
import cors from "cors";
import express from "express";

import dishesRouter from "./routes/dishesRouter.js";
import ordersRouter from "./routes/ordersRouter.js";
import "./db/mongoose.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.PORT || 5000;

//------------ MIDDLEWARES -------------------
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());

//------------ ROUTE MIDDLEWARES -------------

app.use("/api/dishes", dishesRouter);
app.use("/api/orders", ordersRouter);

//------------ ERROR HANDLING ----------------
app.use(errorHandler);

//------------ START SERVER ------------------
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
