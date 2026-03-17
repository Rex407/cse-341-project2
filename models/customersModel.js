const connectDB = require("../db/connection")
const { ObjectId } = require("mongodb")

async function getAllCustomers() {
  const db = await connectDB()
  return db.collection("customers").find().toArray()
}

async function getCustomerById(id) {
  const db = await connectDB()
  return db.collection("customers").findOne({ _id: new ObjectId(id) })
}

async function createCustomer(customer) {
  const db = await connectDB()
  return db.collection("customers").insertOne(customer)
}

async function updateCustomer(id, customer) {
  const db = await connectDB()
  return db.collection("customers").updateOne(
    { _id: new ObjectId(id) },
    { $set: customer }
  )
}

async function deleteCustomer(id) {
  const db = await connectDB()
  return db.collection("customers").deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
}
