import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()



app.get("/", (req,res)=> {
    return res.send("Hey there")
})

app.listen(process.env.PORT,()=> {
    console.log("Server is running on port no.:",process.env.PORT)
})