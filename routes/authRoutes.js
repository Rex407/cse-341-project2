const router = require("express").Router()
const passport = require("passport")

/**
 * @swagger
 * /auth/github:
 *   get:
 *     summary: Login with GitHub
 */
router.get("/github",
  passport.authenticate("github", { scope: ["user:email"] })
)

/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: GitHub callback
 */
router.get("/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api-docs"
  }),
  (req, res) => {
    res.redirect("/profile")
  }
)

router.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not logged in" })
  }
  res.json(req.user)
})

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.send("Logged out")
  })
})

module.exports = router
