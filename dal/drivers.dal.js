/**
 * In-memory array of F1 drivers - acts as the database.
 * Structure matches the f1api.dev API format.
 */
export let drivers = [
  {
    driverId: "max_verstappen",
    name: "Max",
    surname: "Verstappen",
    nationality: "Dutch",
    birthday: "30/09/1997",
    number: 1,
    shortName: "VER",
    teamId: "red_bull",
  },
  {
    driverId: "lewis_hamilton",
    name: "Lewis",
    surname: "Hamilton",
    nationality: "British",
    birthday: "07/01/1985",
    number: 44,
    shortName: "HAM",
    teamId: "ferrari",
  },
  {
    driverId: "charles_leclerc",
    name: "Charles",
    surname: "Leclerc",
    nationality: "Monégasque",
    birthday: "16/10/1997",
    number: 16,
    shortName: "LEC",
    teamId: "ferrari",
  },
  {
    driverId: "lando_norris",
    name: "Lando",
    surname: "Norris",
    nationality: "British",
    birthday: "13/11/1999",
    number: 4,
    shortName: "NOR",
    teamId: "mclaren",
  },
  {
    driverId: "carlos_sainz",
    name: "Carlos",
    surname: "Sainz",
    nationality: "Spanish",
    birthday: "01/09/1994",
    number: 55,
    shortName: "SAI",
    teamId: "williams",
  },
];

/**
 * Returns all drivers from memory.
 * @returns {Array} List of all drivers.
 */
export const getAllDrivers = () => drivers;

/**
 * Finds a single driver by driverId.
 * @param {string} driverId - The driver's unique string ID.
 * @returns {Object|undefined} The driver object, or undefined if not found.
 */
export const getDriverById = (driverId) =>
  drivers.find((d) => d.driverId === driverId);

/**
 * Adds a new driver to memory.
 * @param {Object} driver - The driver data (name, surname, nationality, etc.).
 * @returns {Object} The newly created driver.
 */
export const addDriver = (driver) => {
  const newDriver = {
    driverId: `${driver.name}_${driver.surname}`
      .toLowerCase()
      .replace(" ", "_"),
    ...driver,
  };
  drivers.push(newDriver);
  return newDriver;
};

/**
 * Removes a driver from memory by driverId.
 * @param {string} driverId - The driver's unique string ID.
 * @returns {Object|null} The deleted driver, or null if not found.
 */
export const deleteDriver = (driverId) => {
  const index = drivers.findIndex((d) => d.driverId === driverId);
  if (index === -1) return null;
  const deleted = drivers.splice(index, 1);
  return deleted[0];
};
