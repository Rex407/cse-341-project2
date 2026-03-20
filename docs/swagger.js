const swaggerJsDoc=require("swagger-jsdoc")

const options={
 definition:{
 openapi:"3.0.0",
 info:{
 title:"Car Dealership API",
 version:"1.0.0"
 },
 servers:[
 {url:"https://project2-boap.onrender.com"}
 ]
 },
 apis:["./routes/*.js"]
}

module.exports=swaggerJsDoc(options)
