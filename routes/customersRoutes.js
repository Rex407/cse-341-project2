const router = require("express").Router()
const customersController = require("../controllers/customersController")
const auth = require("../middleware/auth")
const validateCustomer = require("../middleware/validateCustomer") // ✅ I ADD THIS

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
 *     description: Add a new customer to the database (Protected)
 *     security:
 *       - cookieAuth: []   # ✅ SHOWS AUTH REQUIRED
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - city
 *               - licenseNumber
 *               - registeredDate
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
 *       400:
 *         description: Validation error
 */
router.post(
  "/",
  auth,
  validateCustomer,   // ✅ ADD VALIDATION HERE
  customersController.createCustomer
)

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update a customer
 *     description: Update customer information (Protected)
 *     security:
 *       - cookieAuth: []   # ✅ SHOWS AUTH REQUIRED
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - city
 *               - licenseNumber
 *               - registeredDate
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
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Validation error
 */
router.put(
  "/:id",
  auth,
  validateCustomer,   // ✅ ADD VALIDATION HERE
  customersController.updateCustomer
)

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     description: Remove a customer from the database (Protected)
 *     security:
 *       - cookieAuth: []
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
