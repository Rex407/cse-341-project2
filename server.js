const express = require("express")
const cors = require("cors")
require("dotenv").config()

const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger")

const carsRoutes = require("./routes/carsRoutes")
const customersRoutes = require("./routes/customersRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/cars", carsRoutes)
app.use("/customers", customersRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
