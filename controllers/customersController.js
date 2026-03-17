const customersModel = require("../models/customersModel")

const getAll = async (req, res) => {
  try {
    const customers = await customersModel.getAllCustomers()
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getSingle = async (req, res) => {
  try {
    const customer = await customersModel.getCustomerById(req.params.id)
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createCustomer = async (req, res) => {
  try {
    const result = await customersModel.createCustomer(req.body)
    res.status(201).json({
      message: "Customer created successfully",
      id: result.insertedId
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateCustomer = async (req, res) => {
  try {
    await customersModel.updateCustomer(req.params.id, req.body)
    res.status(200).json({ message: "Customer updated successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteCustomer = async (req, res) => {
  try {
    await customersModel.deleteCustomer(req.params.id)
    res.status(200).json({ message: "Customer deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAll,
  getSingle,
  createCustomer,
  updateCustomer,
  deleteCustomer
}
