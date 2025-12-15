import express from "express"
import {getAllUser,createUser} from "../controllers/userController.js"
const router = express.Router()


router.get("/",getAllUser)

router.post("/",createUser)



export default router;