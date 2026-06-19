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
 * Retrieves a single driver by driverId.
 * @param {string} driverId - The driver's unique string ID.
 * @returns {Object|undefined} The driver object, or undefined if not found.
 */
export const fetchDriverById = (driverId) => {
  return getDriverById(driverId);
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
 * Deletes a driver by driverId via the DAL.
 * @param {string} driverId - The driver's unique string ID.
 * @returns {Object|null} The deleted driver, or null if not found.
 */
export const removeDriver = (driverId) => {
  return deleteDriver(driverId);
};
