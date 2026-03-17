const express=require("express")
const cors=require("cors")
const session=require("express-session")
const passport=require("./config/passport")
const swaggerUi=require("swagger-ui-express")
const swaggerSpec=require("./docs/swagger")

require("dotenv").config()

const carsRoutes=require("./routes/carsRoutes")
const customersRoutes=require("./routes/customersRoutes")

const app=express()

app.use(cors())
app.use(express.json())

app.use(session({
 secret:process.env.SESSION_SECRET,
 resave:false,
 saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.get("/auth/google",
 passport.authenticate("google",{scope:["profile","email"]})
)

app.get("/auth/google/callback",
 passport.authenticate("google",{failureRedirect:"/"}),
 (req,res)=>{res.send("Login successful")}
)

app.use("/cars",carsRoutes)
app.use("/customers",customersRoutes)

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))

const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
 console.log(`Server running http://localhost:${PORT}`)
})
