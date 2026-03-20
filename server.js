const express = require("express")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")
require("./config/passport")

const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./docs/swagger")

require("dotenv").config()

// ✅ CREATE APP FIRST
const app = express()

// ✅ THEN import routes
const indexRoutes = require("./routes/index")
const carsRoutes = require("./routes/carsRoutes")
const customersRoutes = require("./routes/customersRoutes")

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

// ✅ NOW use routes
app.use("/", indexRoutes)
app.use("/cars", carsRoutes)
app.use("/customers", customersRoutes)

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`)
})
