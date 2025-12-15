import express from "express"
import Product from "../models/Product.js";
import { createProduct, getAllProduct, getProductByName } from "../controllers/productController.js";

const router = express.Router()


router.get("/",getAllProduct)

router.get("/:name",getProductByName)

router.post("/",createProduct)



export default router;