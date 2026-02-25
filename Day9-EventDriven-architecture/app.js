import express from "express";
import { OrderController } from "./orderController";

const app = express();
app.use(express.json());


/* Dependency initialization */

const orderController = new OrderController();


/* Routes */


app.post("/orders",(req,res)=>orderController.create(req,res));

app.listen(3000,()=> {
    console.log("Hello world")
})