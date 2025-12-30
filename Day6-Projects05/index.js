require('dotenv').config()
const path = require("path")
const express = require("express")
const app = express()

// middlewares
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.get("/",(req,res)=> {
    return res.render('home')
})
app.listen(process.env.PORT,()=> {
    console.log(`Successfully running on server ${process.env.PORT}`)
})