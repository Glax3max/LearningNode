require('dotenv').config();
const express = require("express")
const app = express();
const connectDB  = require("./DBConnect")

// connecting DB
connectDB(process.env.MONGO_URL);

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.listen(process.env.PORT,()=> {
    console.log(`Successfully connected to the server 8000`)
})

