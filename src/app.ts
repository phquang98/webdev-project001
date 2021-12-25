import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import express from "express";

import { xConnect } from "./utils/connect";
import { xLog } from "./utils/logger";
import { xRoutes } from "./utils/routes";

// --- Config + Initiate server ---
dotenv.config(); // read key-value pairs from .env
const port = process.env.PORT_NUMBER_HERE || 1337; //

const app = express(); // create an express app server

// --- Top Lv Middlewares ---
app.use(express.json()); // TLDR can send json data from FE to endpoints
app.use(express.urlencoded({ extended: true })); // if use Form submit, data from form will be written to req.body
app.use(morgan(":method :url :status :res[content-length] - :response-time ms")); // TLDR logger
app.use(cors()); // TLDR allow dif origin to HTTP to this server

// --- Run server ---
app.listen(port, async () => {
  xLog.info(`Server started at http://localhost:${port}`);
  await xConnect();
  xRoutes(app);
});

// check for git hooks
