const { body, validationResult } = require("express-validator")

const validateCar = [
  body("make").notEmpty(),
  body("model").notEmpty(),
  body("year").isNumeric(),
  body("price").isNumeric(),
  body("color").notEmpty(),
  body("mileage").isNumeric(),
  body("transmission").notEmpty(),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]

module.exports = validateCar
