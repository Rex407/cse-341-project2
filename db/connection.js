const { MongoClient } = require("mongodb")
require("dotenv").config()

const client = new MongoClient(process.env.MONGODB_URI)

let database

async function connectDB() {
  if (!database) {
    await client.connect()
    database = client.db()
    console.log("MongoDB connected")
  }
  return database
}

module.exports = connectDB
