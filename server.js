const express = require("express")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")      //
require("./config/passport")              // 
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./docs/swagger")


require("dotenv").config()

const carsRoutes = require("./routes/carsRoutes")
const customersRoutes = require("./routes/customersRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

// ✅ FIX CORS for sessions
app.use(cors({
  origin: true,
  credentials: true
}))

app.use(express.json())

// ✅ SESSION (IMPORTANT)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

// ✅ PASSPORT
app.use(passport.initialize())
app.use(passport.session())

// ✅ USE ONLY ONE AUTH SYSTEM (GitHub)
app.use("/auth", authRoutes)

// ✅ PROFILE ROUTE (for demo)
app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not logged in" })
  }
  res.json(req.user)
})

// ✅ ROUTES
app.use("/cars", carsRoutes)
app.use("/customers", customersRoutes)

// ✅ SWAGGER
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`)
})
