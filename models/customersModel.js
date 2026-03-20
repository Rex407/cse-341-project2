const { getDb } = require("../db/connection")
const { ObjectId } = require("mongodb")

function getAllCustomers() {
  const db = getDb()
  return db.collection("customers").find().toArray()
}

function getCustomerById(id) {
  const db = getDb()
  return db.collection("customers").findOne({ _id: new ObjectId(id) })
}

function createCustomer(customer) {
  const db = getDb()
  return db.collection("customers").insertOne(customer)
}

function updateCustomer(id, customer) {
  const db = getDb()
  return db.collection("customers").updateOne(
    { _id: new ObjectId(id) },
    { $set: customer }
  )
}

function deleteCustomer(id) {
  const db = getDb()
  return db.collection("customers").deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
}
