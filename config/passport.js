const passport = require("passport")
const GitHubStrategy = require("passport-github2").Strategy
const { getDb } = require("../db/connection")

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const db = getDb()

    const user = await db.collection("users").findOne({ githubId: profile.id })

    if (user) {
      return done(null, user)
    }

    const newUser = {
      githubId: profile.id,
      username: profile.username,
      displayName: profile.displayName
    }

    await db.collection("users").insertOne(newUser)

    return done(null, newUser)

  } catch (error) {
    return done(error, null)
  }
}))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))
