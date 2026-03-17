const { getDb } = require("../db/connection")

const collection = () => getDb().collection("users")

module.exports = { collection }
