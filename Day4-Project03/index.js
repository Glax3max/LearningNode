require('dotenv').config();
const express = require("express")
const app = express();
const connectDB  = require("./DBConnect")
const urlRouter = require("./routes/url.js")
const userRouter = require("./routes/user.js")

// connecting DB
connectDB(process.env.MONGO_URL);

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// router
app.use("/api/url",urlRouter);
app.use("/api/user",userRouter);

app.listen(process.env.PORT,()=> {
    console.log(`Successfully connected to the server 8000`)
})

