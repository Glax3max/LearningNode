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
const orderService = new OrderService();
const orderController = new OrderController(orderService);

/* Register Listeners (subscribers) */
orderService.on("Order:created",(orderData)=> {
    // email service
    emailService.sendEmail(orderData);
})

orderService.on("Order:created",(orderData) => {
    // inventory service
    inventoryService.updateInventory(orderData)
})

/* Routes */


app.post("/orders",(req,res)=>orderController.create(req,res));

app.listen(3000,()=> {
    console.log("Hello world")
})