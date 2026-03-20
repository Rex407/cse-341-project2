const { getDb } = require("../db/connection")
const { ObjectId } = require("mongodb")

function getAllCars() {
  const db = getDb()
  return db.collection("cars").find().toArray()
}

function getCarById(id) {
  const db = getDb()
  return db.collection("cars").findOne({ _id: new ObjectId(id) })
}

function createCar(car) {
  const db = getDb()
  return db.collection("cars").insertOne(car)
}

function updateCar(id, car) {
  const db = getDb()
  return db.collection("cars").updateOne(
    { _id: new ObjectId(id) },
    { $set: car }
  )
}

function deleteCar(id) {
  const db = getDb()
  return db.collection("cars").deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}
