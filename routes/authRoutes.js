const router = require("express").Router()
const authController = require("../controllers/authController")

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user
 */
router.post("/register", authController.register)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 */
router.post("/login", authController.login)

module.exports = router
