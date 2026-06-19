import {
  getAllDrivers,
  getDriverById,
  addDriver,
  deleteDriver,
} from "../dal/drivers.dal.js";

/**
 * Retrieves all drivers from the DAL.
 * @returns {Array} List of all drivers.
 */
export const fetchAllDrivers = () => {
  return getAllDrivers();
};

/**
 * Retrieves a single driver by driverId, throws if not found.
 * @param {string} driverId - The driver's unique string ID.
 * @returns {Object} The driver object.
 */
export const fetchDriverById = (driverId) => {
  const driver = getDriverById(driverId);
  if (!driver) throw new Error("Driver not found");
  return driver;
};

/**
 * Adds a new driver via the DAL.
 * @param {Object} driver - The driver data.
 * @returns {Object} The newly created driver.
 */
export const createDriver = (driver) => {
  return addDriver(driver);
};

/**
 * Deletes a driver by driverId, throws if not found.
 * @param {string} driverId - The driver's unique string ID.
 * @returns {Object} The deleted driver.
 */
export const removeDriver = (driverId) => {
  const deleted = deleteDriver(driverId);
  if (!deleted) throw new Error("Driver not found");
  return deleted;
};
