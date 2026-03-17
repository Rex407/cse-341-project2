const router = require("express").Router()
const carsController = require("../controllers/carsController")
const validateCar = require("../middleware/validate")
const auth = require("../middleware/auth")

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get all cars
 *     description: Retrieve a list of all cars from the database
 *     responses:
 *       200:
 *         description: A list of cars
 */
router.get("/", carsController.getAll)

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Get a single car
 *     description: Retrieve a car by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Car ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single car
 */
router.get("/:id", carsController.getSingle)

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Create a new car
 *     description: Add a new car to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               make:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: number
 *               price:
 *                 type: number
 *               color:
 *                 type: string
 *               mileage:
 *                 type: number
 *               transmission:
 *                 type: string
 *     responses:
 *       201:
 *         description: Car created successfully
 */
router.post("/", auth, validateCar, carsController.createCar)

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Update a car
 *     description: Update an existing car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Car ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car updated successfully
 */
router.put("/:id", auth, validateCar, carsController.updateCar)

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Delete a car
 *     description: Remove a car from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Car ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car deleted successfully
 */
router.delete("/:id", auth, carsController.deleteCar)

module.exports = router
