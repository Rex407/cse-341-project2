const carsModel = require("../models/carsModel")

exports.getAll = async (req,res)=>{
 try{
 const cars=await carsModel.getAllCars()
 res.json(cars)
 }catch(e){
 res.status(500).json({error:e.message})
 }
}

exports.getSingle=async(req,res)=>{
 try{
 const car=await carsModel.getCarById(req.params.id)
 res.json(car)
 }catch(e){
 res.status(500).json({error:e.message})
 }
}

exports.createCar=async(req,res)=>{
 try{
 const result=await carsModel.createCar(req.body)
 res.status(201).json({id:result.insertedId})
 }catch(e){
 res.status(500).json({error:e.message})
 }
}

exports.updateCar=async(req,res)=>{
 try{
 await carsModel.updateCar(req.params.id,req.body)
 res.json({message:"Car updated"})
 }catch(e){
 res.status(500).json({error:e.message})
 }
}

exports.deleteCar=async(req,res)=>{
 try{
 await carsModel.deleteCar(req.params.id)
 res.json({message:"Car deleted"})
 }catch(e){
 res.status(500).json({error:e.message})
 }
}
