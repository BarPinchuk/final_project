import {
  fetchAllDrivers,
  fetchDriverById,
  createDriver,
  removeDriver,
} from "../services/drivers.service.js";

/**
 * Returns all drivers.
 */
export const getAllDrivers = (req, res) => {
  try {
    const drivers = fetchAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Returns a single driver by driverId.
 */
export const getDriverById = (req, res) => {
  try {
    const driver = fetchDriverById(req.params.driverId);
    res.status(200).json(driver);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Adds a new driver.
 */
export const addDriver = (req, res) => {
  try {
    const driver = createDriver(req.body);
    res.status(201).json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Deletes a driver by driverId.
 */
export const deleteDriver = (req, res) => {
  try {
    const deleted = removeDriver(req.params.driverId);
    res
      .status(200)
      .json({ message: "Driver deleted successfully", driver: deleted });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
