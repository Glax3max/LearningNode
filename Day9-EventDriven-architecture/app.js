import express from "express";
import { OrderController } from "./orderController.js";
import { OrderService } from "./orderService.js";
import { EmailService } from "./emailService.js";
import { InventoryService } from "./inventoryService.js";

const app = express();
app.use(express.json());


/* Dependency initialization */
const emailService = new EmailService();
const inventoryService = new InventoryService();
const orderService = new OrderService(emailService,inventoryService);
const orderController = new OrderController(orderService);

/* Routes */


app.post("/orders",(req,res)=>orderController.create(req,res));

app.listen(3000,()=> {
    console.log("Hello world")
})