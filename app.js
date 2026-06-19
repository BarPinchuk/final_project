import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import driversRouter from "./routes/drivers.routes.js";

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/drivers", driversRouter);