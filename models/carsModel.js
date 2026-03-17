const connectDB = require("../db/connection")
const { ObjectId } = require("mongodb")

async function getAllCars() {
  const db = await connectDB()
  return db.collection("cars").find().toArray()
}

async function getCarById(id) {
  const db = await connectDB()
  return db.collection("cars").findOne({ _id: new ObjectId(id) })
}

async function createCar(car) {
  const db = await connectDB()
  return db.collection("cars").insertOne(car)
}

async function updateCar(id, car) {
  const db = await connectDB()
  return db.collection("cars").updateOne(
    { _id: new ObjectId(id) },
    { $set: car }
  )
}

async function deleteCar(id) {
  const db = await connectDB()
  return db.collection("cars").deleteOne({ _id: new ObjectId(id) })
}

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar }
