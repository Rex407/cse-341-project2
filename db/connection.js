const { MongoClient } = require("mongodb")
require("dotenv").config()

let db

const initDb = async () => {
  if (db) return db

  const client = new MongoClient(process.env.MONGODB_URI)
  await client.connect()
  db = client.db()

  console.log("MongoDB connected")
  return db
}

const getDb = () => {
  if (!db) {
    throw new Error("Database not initialized")
  }
  return db
}

module.exports = { initDb, getDb }
