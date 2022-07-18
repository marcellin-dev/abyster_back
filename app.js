import express from "express";
import cors from "cors";
const app = express();
// import { json } from "body-parser";

import appRoutes from "./routes/index.js";

import "./config/db.js";

import { urlencoded } from "express";

const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type", "Authorization"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use(express.json());

//entry routes

app.use("/api", appRoutes);

export default app;
