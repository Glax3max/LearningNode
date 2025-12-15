import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/UseRouter.js"
import productRouter from "./routes/ProductRouter.js"
dotenv.config();
const app = express();


// middlewares
app.use(express.json())
app.use(express.urlencoded())


app.use("/api/users",userRouter)
app.use("/api/product",productRouter);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT_NAME,()=> {
        console.log(`Server is running successfully on Port:${process.env.PORT_NAME}`)
    })
}).catch((err)=> {
    console.log(err);
})