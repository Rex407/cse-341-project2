const router = require("express").Router()
const passport = require("passport")

// Home
router.get("/", (req, res) => {
  res.send(`
    <h1>Car API</h1>
    <a href="/login">Login with GitHub</a><br/>
    <a href="/profile">Profile</a><br/>
    <a href="/logout">Logout</a><br/>
  `)
})

// Auth routes
router.get("/login",
  passport.authenticate("github", { scope: ["user:email"] })
)

router.get("/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile")
  }
)

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err)
    res.redirect("/")
  })
})

// Profile
router.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not logged in" })
  }
  res.json(req.user)
})

// ✅ Your actual API routes
router.use("/cars", require("./carsRoutes"))
router.use("/customers", require("./customersRoutes"))

module.exports = router
