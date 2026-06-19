import { Router } from "express";
import {
  getAllDrivers,
  getDriverById,
  addDriver,
  deleteDriver,
} from "../controllers/drivers.controller.js";

const router = Router();

router.get("/", getAllDrivers);
router.get("/:driverId", getDriverById);
router.post("/", addDriver);
router.delete("/:driverId", deleteDriver);

export default router;
