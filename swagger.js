const swaggerJsDoc = require("swagger-jsdoc")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Dealership API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"]
}

module.exports = swaggerJsDoc(options)
