const carsModel = require("../models/carsModel")

const getAll = async (req, res) => {
  const cars = await carsModel.getAllCars()
  res.json(cars)
}

const getSingle = async (req, res) => {
  const car = await carsModel.getCarById(req.params.id)
  res.json(car)
}

const createCar = async (req, res) => {
  const result = await carsModel.createCar(req.body)
  res.status(201).json(result)
}

const updateCar = async (req, res) => {
  await carsModel.updateCar(req.params.id, req.body)
  res.status(200).json({ message: "Car updated successfully" })
}

const deleteCar = async (req, res) => {
  await carsModel.deleteCar(req.params.id)
  res.status(200).json({ message: "Car deleted successfully" })
}

module.exports = {
  getAll,
  getSingle,
  createCar,
  updateCar,
  deleteCar
}
