const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { collection } = require("../models/userModel")

// Register
const register = async (req, res) => {
  try {
    const { email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = {
      email,
      password: hashedPassword
    }

    await collection().insertOne(user)

    res.status(201).json({ message: "User created" })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await collection().findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    res.json({ token })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { register, login }
