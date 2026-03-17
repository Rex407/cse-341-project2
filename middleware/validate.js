const { body, validationResult } = require("express-validator")

const validateCar = [
  body("make").notEmpty().withMessage("Make is required"),
  body("model").notEmpty().withMessage("Model is required"),
  body("year").isNumeric().withMessage("Year must be a number"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("color").notEmpty().withMessage("Color is required"),
  body("mileage").isNumeric().withMessage("Mileage must be a number"),
  body("transmission").notEmpty().withMessage("Transmission is required"),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]

module.exports = validateCar
