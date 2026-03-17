const router = require("express").Router()
const customersController = require("../controllers/customersController")
const auth = require("../middleware/auth")

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     description: Retrieve a list of all customers from the database
 *     responses:
 *       200:
 *         description: Successfully returned all customers
 */
router.get("/", customersController.getAll)

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get a single customer
 *     description: Retrieve a customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully returned customer
 */
router.get("/:id", customersController.getSingle)

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     description: Add a new customer to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               city:
 *                 type: string
 *               licenseNumber:
 *                 type: string
 *               registeredDate:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 */
router.post("/", auth, customersController.createCustomer)

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update a customer
 *     description: Update customer information
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer updated successfully
 */
router.put("/:id", auth, customersController.updateCustomer)

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     description: Remove a customer from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 */
router.delete("/:id", auth, customersController.deleteCustomer)

module.exports = router
